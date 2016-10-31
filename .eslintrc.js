module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 6,
        // "ecmaFeatures": {
        //     "modules": true
        // }
        sourceType: "module"
    },
    env: {
        "browser":      true,
    },
    rules: {
        "eqeqeq":                    "error",
        "curly":                     "off",
        "no-bitwise":                "off",
        "no-eq-null":                "error",
        "wrap-iife":                 ["error", "any"],
        "no-use-before-define":      "off",
        "new-cap":                   "error",
        "no-caller":                 "error",
        "no-undef":                  "error",
        "strict":                    "off",
        "no-mixed-spaces-and-tabs":  "error",
        "no-debugger":               "error",
        "no-script-url":             "error",
        "eol-last":                  "error",
        "no-cond-assign":            "error",
        "no-console":                "error",
        "no-constant-condition":     "error", 
        "no-dupe-args":              "error",
        "no-dupe-keys":              "error",
        "no-empty":                  "error",
        "no-extra-semi":             "error",
        "dot-notation":              "error",
        "no-redeclare":              "error",
        "no-unused-vars":            ["warn", { "args": "none" }],
        "no-unreachable":            "error",
        "valid-typeof":              "error"
    },
};