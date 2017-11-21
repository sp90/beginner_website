module.exports = {
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "opts": {
    "destination": "./docs"
  },
  "plugins": [
    "plugins/markdown"
  ],
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "outputSourceFiles": true
    },
    "path": "ink-docstrap",
    "theme": "Flatly",
    "navType": "vertical",
    "linenums": true,
    "dateFormat": "MMMM Do YYYY, h:mm:ss a"
  }
}
