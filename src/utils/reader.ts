// src/utils/reader.ts
import { createReader } from "@keystatic/core/reader";
import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../keystatic.config";
import { cache } from "react";
import { cookies, draftMode } from "next/headers";

export const reader = cache(async () => {
  let isDraftModeEnabled = false;

  // draftMode throws in e.g. generateStaticParams
  try {
    const draft = await draftMode();
    isDraftModeEnabled = draft.isEnabled;
  } catch {
    // Draft mode not available in this context
  }

  // Match the storage configuration from keystatic.config.ts
  if (process.env.NODE_ENV === "production") {
    // For private repos, try GitHub reader with token, fallback to local
    try {
      const cookieStore = await cookies().catch(() => ({
        get: () => undefined,
      }));
      const branch = isDraftModeEnabled
        ? cookieStore.get("ks-branch")?.value
        : "main";

      const token = isDraftModeEnabled
        ? cookieStore.get("keystatic-gh-access-token")?.value
        : process.env.GITHUB_TOKEN;

      if (token) {
        return createGitHubReader(keystaticConfig, {
          repo: "elviswangari/socialfunnel",
          ref: branch || "main",
          token,
        });
      }
    } catch (error) {
      console.warn(
        "GitHub reader failed, falling back to local reader:",
        error
      );
    }

    // Fallback to local reader if GitHub fails (content should be built into deployment)
    return createReader(process.cwd(), keystaticConfig);
  }

  // In development, handle draft mode
  if (isDraftModeEnabled) {
    const cookieStore = await cookies();
    const branch = cookieStore.get("ks-branch")?.value;

    if (branch) {
      return createGitHubReader(keystaticConfig, {
        repo: "elviswangari/socialfunnel",
        ref: branch,
        token: cookieStore.get("keystatic-gh-access-token")?.value,
      });
    }
  }

  // Development default: use local reader (matching keystatic config)
  return createReader(process.cwd(), keystaticConfig);
});
