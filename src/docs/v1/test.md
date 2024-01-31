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

Once you've organized the doc posts as shown above. You can add an entry in the configuration `src/config/v1DocsConfig.json` so the links to the docs appear in the sidebar.

Below is the configuration for the docs posts. `slug` property should match the file name of the doc. For example, this doc that you're reading right now is in `src/docs/v1/test.md` and it's configuration is in `src/config/v1DocsConfig.json`

```
{
    "docs":[{
        "title":"Fist document",
        "slug":"test",
        "description":"This is a first document",
        "date":"2023-12-17",
        "authors":["Arun","Tom"],
        "fileName":"test.md"
    },
    {
        "title":"Secod document",
        "slug":"second-doc",
        "description":"This is a second document",
        "date":"2023-12-17",
        "authors":["Arun","Tom"],
        "fileName":"secondPost.md"
    },
    {
        "title":"Third document",
        "slug":"third-doc",
        "description":"This is a third document",
        "date":"2023-12-17",
        "authors":["Arun","Tom"],
        "fileName":"secondPost.md"
    }

]
}

```
