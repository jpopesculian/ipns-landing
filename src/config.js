System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app/*": "/scripts/*"
  },

  map: {
    "@cycle/core": "npm:@cycle/core@6.0.0",
    "@cycle/dom": "npm:@cycle/dom@9.0.2",
    "@cycle/history": "npm:@cycle/history@1.1.0",
    "@cycle/isolate": "npm:@cycle/isolate@1.2.0",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "event-emitter": "npm:event-emitter@0.3.4",
    "immutable": "npm:immutable@3.7.6",
    "rx": "npm:rx@4.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:@cycle/core@6.0.0": {
      "rx": "npm:rx@4.0.8"
    },
    "npm:@cycle/dom@9.0.2": {
      "hyperscript-helpers": "npm:hyperscript-helpers@2.0.3",
      "matches-selector": "npm:matches-selector@1.0.0",
      "vdom-parser": "npm:vdom-parser@1.2.1",
      "vdom-to-html": "npm:vdom-to-html@2.2.0",
      "virtual-dom": "npm:virtual-dom@2.1.1",
      "x-is-array": "npm:x-is-array@0.1.0"
    },
    "npm:@cycle/history@1.1.0": {
      "history": "npm:history@1.17.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rx": "npm:rx@4.0.8"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:es5-ext@0.10.11": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:es6-symbol@3.0.2": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:history@1.17.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:param-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:query-string@3.0.1": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rx@4.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vdom-parser@1.2.1": {
      "virtual-dom": "npm:virtual-dom@2.1.1"
    },
    "npm:vdom-to-html@2.2.0": {
      "escape-html": "npm:escape-html@1.0.3",
      "param-case": "npm:param-case@1.1.2",
      "virtual-dom": "npm:virtual-dom@2.1.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:virtual-dom@2.1.1": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
