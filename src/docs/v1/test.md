## Welcome to doczilla

Doczilla is a simple documentation tool made using Reactjs and Markdown. Using Doczilla users will be able bring up a documentation portal in minutes.

All the documentation,blog and API docs are written in markdown syntax and react is used for navigating and managing the dynamic nature of the doczilla.

## Docs

`src/docs` Directory is where the documentation posts are organised.

`src/docs/v1` Directory for storing the `v1` related documents.

`src/docs/v2` Directory for `v2` related documents.

Simimlary you can create another directory `v3` under `src/docs/` to manage the documents for version 3.

The `src/docs` structure is shown below.

```
.
├── DocsApp.jsx
├── DocsFooter.jsx
├── DocsLayout.jsx
├── DocsMain.jsx
├── DocsSideBar.jsx
├── v1
│   ├── second-doc.md
│   ├── test.md
│   └── third-doc.md
└── v2
    └── v2test.md

```

Once you've organized the doc posts as shown above, you can add an entry in the configuration `src/config/v1DocsConfig.json` so that the links to the docs appear in the sidebar.

Below is the configuration for the docs posts. `slug` property should match the file name of the doc. For example, this doc that you're reading right now is in `src/docs/v1/test.md` and it's configuration is in `src/config/v1DocsConfig.json`

```json
{
  "docs": [
    {
      "title": "Fist document",
      "slug": "test",
      "description": "This is a first document",
      "date": "2023-12-17",
      "authors": ["Arun", "Tom"],
      "fileName": "test.md"
    },
    {
      "title": "Secod document",
      "slug": "second-doc",
      "description": "This is a second document",
      "date": "2023-12-17",
      "authors": ["Arun", "Tom"],
      "fileName": "secondPost.md"
    },
    {
      "title": "Third document",
      "slug": "third-doc",
      "description": "This is a third document",
      "date": "2023-12-17",
      "authors": ["Arun", "Tom"],
      "fileName": "secondPost.md"
    }
  ]
}
```

## Getting started

1. Clone this repo
2. Navigate to this project directory in the command prompt.
3. Run the command `npm install` to install dependencies
4. Next, run `npm run start` to start the application in development mode.

### Add a new document

1. Add a new markdown file in the `src/docs/v1` directory. Name it as `simple-doc-test`
2. Add an entry in the `src/config/v1DocsConfig.json` as below. Make sure the slug value matches with the file name created in step 1
3. That's it. Re-run the app to see the changes.

```json
{
  "title": "Secod document",
  "slug": "simple-doc-test", // This should match the markdown file name
  "description": "This is a second document",
  "date": "2023-12-17",
  "authors": ["Arun", "Tom"],
  "fileName": "secondPost.md"
}
```
