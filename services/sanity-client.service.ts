import { SanityClient, createClient } from "next-sanity";

// Preview token: skrFNOW0Ds1p3X3lQNntk6F8IyIHLdjNyRXPUQZ0NgBSq6pJ056l1IjVOZ2Z6tkGnsyQhlzUa420W9E3Zge1xvLtWtkIAznnKJXzJFWt6xvXXJyGNDkuCSbOhd5tqpAlrUfjGAGYXqY5XmSYZ1TfThXGhtzZpYsIcap8o6Dhnaope5mTXkcQ

export const getClient =
  // = ({
  //   preview,
  // }: {
  //   preview?: { token: string };
  // })
  (): SanityClient => {
    const preview = {
      token:
        "skrFNOW0Ds1p3X3lQNntk6F8IyIHLdjNyRXPUQZ0NgBSq6pJ056l1IjVOZ2Z6tkGnsyQhlzUa420W9E3Zge1xvLtWtkIAznnKJXzJFWt6xvXXJyGNDkuCSbOhd5tqpAlrUfjGAGYXqY5XmSYZ1TfThXGhtzZpYsIcap8o6Dhnaope5mTXkcQ",
    };
    return createClient({
      projectId: "jtjt5tyd",
      dataset: "production",
      useCdn: false,
      perspective: "previewDrafts",
      apiVersion: "2021-10-21", // Learn more: https://www.sanity.io/docs/api-versioning
      token: preview.token,
    });
  };
