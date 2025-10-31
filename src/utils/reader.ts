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

  if (isDraftModeEnabled) {
    const cookieStore = await cookies();
    const branch = cookieStore.get("ks-branch")?.value;

    if (branch) {
      return createGitHubReader(keystaticConfig, {
        // Replace with your actual GitHub repo when you connect to GitHub
        repo: "elviswangari/socialfunnel",
        ref: branch,
        // Assuming an existing GitHub app or personal access token
        token: cookieStore.get("keystatic-gh-access-token")?.value,
      });
    }
  }

  // If draft mode is off, use the regular reader
  return createReader(process.cwd(), keystaticConfig);
});
