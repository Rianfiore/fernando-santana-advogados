"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/index.js + 13 modules
var components = __webpack_require__(217);
;// CONCATENATED MODULE: ./pages/_app.jsx




const GlobalStyle = external_styled_components_.createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Marcellus", serif;
}

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
const theme = {
    colors: {
        primary: "#0070f3"
    }
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Fernando Santana Advogados"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                charset: "utf-8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: "Fernando Santana Advogados"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "keywords",
                                content: "advogados, advogado, fernando, santana, fernando santana, fernando santana advogado, fernando santana advogados, fernando santana advogados"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "author",
                                content: "Rian Fiore"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "robots",
                                content: "index, follow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "googlebot",
                                content: "index, follow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "google",
                                content: "index, follow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "google-site-verification",
                                content: "_"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "msvalidate.01",
                                content: "_"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "alexaVerifyID",
                                content: "_"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "yandex",
                                content: "_"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "yandex-verification",
                                content: "_"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "rating",
                                content: "general"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "language",
                                content: "pt-br"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "revisit-after",
                                content: "1 days"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "distribution",
                                content: "global"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "copyright",
                                content: "Fernando Santana Advogados"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Layout */.Ar, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 886:
/***/ ((module) => {

module.exports = require("react-icons/ai/");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [217], () => (__webpack_exec__(476)));
module.exports = __webpack_exports__;

})();