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

  // In production, always use GitHub reader
  if (process.env.NODE_ENV === "production") {
    const cookieStore = await cookies().catch(() => ({ get: () => undefined }));
    const branch = isDraftModeEnabled
      ? cookieStore.get("ks-branch")?.value
      : "main";

    return createGitHubReader(keystaticConfig, {
      repo: "elviswangari/socialfunnel",
      ref: branch || "main",
      // In production, we don't need a token for public repos reading from main branch
      // Token is only needed for preview/draft mode
      token: isDraftModeEnabled
        ? cookieStore.get("keystatic-gh-access-token")?.value
        : undefined,
    });
  }

  // In development, use draft mode logic or local reader
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

  // Development default: use local reader
  return createReader(process.cwd(), keystaticConfig);
});
