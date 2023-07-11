import { createClient } from "next-sanity";

export const cdnClient = createClient({
  projectId: "jtjt5tyd",
  dataset: "production",
  apiVersion: "2022-03-25",
  perspective: "previewDrafts",
  useCdn: false,
});

export const draftClient = createClient({
  projectId: "jtjt5tyd",
  dataset: "production",
  apiVersion: "2022-03-25",
  perspective: "previewDrafts",
  useCdn: false,
});
