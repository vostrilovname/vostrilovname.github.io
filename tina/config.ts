import dayjs from "dayjs";
import { defineConfig } from "tinacms";
import { StoriesFields, SpecialFields, CinemaFields, LibraryFields } from "./templates";


// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c0d519f8-2ec4-4d54-a412-e4c9360176a8", // Get this from tina.io
  token: "2bcb8786f0e368c452b7fa1b27baa3771b4bd79e", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "ed",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "/assets/uploads",
      publicFolder: "_site",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Рассказ",
        name: "stories",
        path: "/src/stories",
        match: {
          include: "**/*",
          exclude: "post",
        },
        fields: [
          ...StoriesFields(),
        ],
      },
      {
        format: "md",
        label: "Кинозал",
        name: "cinema",
        path: "/src/cinema",
        match: {
          include: "**/*",
          exclude: "cinema",
        },
        fields: [
          ...CinemaFields(),
        ],
      },
      {
        format: "md",
        label: "Разное",
        name: "special",
        path: "/src/special",
        match: {
          include: "**/*",
          exclude: "special",
        },
        fields: [
          ...SpecialFields(),
        ],

        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            date: dayjs().toString(),
          }
        }
      },
      {
        format: "md",
        label: "Библиотека",
        name: "library",
        path: "/src/library",
        match: {
          include: "**/*",
          exclude: "library",
        },
        fields: [
          ...LibraryFields(),
        ],

        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            eleventyNavigation: {
              parent: "Библиотека",
              order: 1,
              key: ""
            },
          }
        },
      },
      {
        format: "md",
        label: "Друзья семьи",
        name: "friends",
        path: "/src/friends",
        match: {
          include: "**/*",
          exclude: "friends",
        },
        fields: [
          ...LibraryFields(),
        ],

        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            eleventyNavigation: {
              parent: "История семьи",
              order: 1,
              key: ""
            },
          }
        },
      },
    ],
  },
});
