module.exports = {
  "presets": [
    ["env",
      {
        // Jest supports a basic web environment, but not sure if we should be
        // targeting web or node with Babel. In the official docs, no targets
        // are specified because they don't use `env` preset.
        "targets": {
          "node": "current"
        }
      }
    ],
    "react"
  ],
  "plugins": ["transform-object-rest-spread"]
}
