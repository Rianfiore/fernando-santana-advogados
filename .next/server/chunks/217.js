"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ components_button),
  "Zb": () => (/* reexport */ card),
  "lr": () => (/* reexport */ carousel),
  "JO": () => (/* reexport */ icon),
  "Ar": () => (/* reexport */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/carousel/styles.js

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-47193c17-0"
})`
  display: flex;
  justify-items: flex-start;
  justify-content: center;

  .button {
    position: relative;
    margin: 0 2%;
    margin-top: 10vw;
    height: 100%;
  }

  .buttonDisabled {
    position: relative;
    margin: 0 2%;
    margin-top: 10vw;
    height: 100%;

    div {
      button {
        opacity: 0.2;
        cursor: default;
        &:hover {
          transform: scale(1);
        }
      }
    }
  }

  .viewport {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 63%;
    position: relative;
    top: -10vw;

    .contents {
      position: relative;
      display: flex;
      transform: translate(${(props)=>props.directionAnimation
}px, 0);
      transition: transform 0.5s ease-in-out;
      gap: 1vw;
      cursor: pointer;
    }
  }
`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/carousel/index.jsx




function Carousel({ children  }) {
    const { 0: carouselValue , 1: setCarouselValue  } = (0,external_react_.useState)(0), contentsEl = (0,external_react_.useRef)(null), buttonLeftEl = (0,external_react_.useRef)(null), buttonRightEl = (0,external_react_.useRef)(null);
    function calculateWidthCarousel(direction) {
        const contentsWidth = contentsEl.current.clientWidth, contentsLength = contentsEl.current.children.length, value = contentsWidth / contentsLength, contentsLimit = contentsWidth / 2 - value / 2 - value;
        switch(direction){
            case "left":
                carouselValue < contentsLimit - value ? handleButtonStatus(carouselValue + value, false) : handleButtonStatus(contentsLimit, true);
                break;
            case "right":
                carouselValue > -contentsLimit + value ? handleButtonStatus(carouselValue - value, false) : handleButtonStatus(-contentsLimit, true);
                break;
            default:
                console.error("Erro: prop 'direction' n\xe3o definida.");
                break;
        }
    }
    function handleButtonStatus(rangeLimit, isDisabled) {
        setCarouselValue(rangeLimit);
        rangeLimit <= 0 && (isDisabled ? buttonRightEl.current.className = "buttonDisabled" : buttonRightEl.current.className = "button");
        rangeLimit >= 0 && (isDisabled ? buttonLeftEl.current.className = "buttonDisabled" : buttonLeftEl.current.className = "button");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        directionAnimation: carouselValue,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "button",
                onClick: ()=>calculateWidthCarousel("left")
                ,
                ref: buttonLeftEl,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                    typeButton: "slider",
                    direction: "left",
                    arrowColor: "#0f1115"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "viewport",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contents",
                    ref: contentsEl,
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "button",
                onClick: ()=>calculateWidthCarousel("right")
                ,
                ref: buttonRightEl,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                    typeButton: "slider",
                    direction: "right",
                    arrowColor: "#0f1115"
                })
            })
        ]
    });
}
/* harmony default export */ const carousel = (Carousel);

;// CONCATENATED MODULE: ./components/button/styles.js

const styles_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ba844894-0"
})`
  button {
    display: flex;
    justify-content: center;
    padding: 1vw 1vw;
    background-color: transparent;
    color: #fbce33;
    border-color: #fbce33;
    text-transform: uppercase;
    font-size: 1.2vw;
    font-weight: 600;
    letter-spacing: 0.25vw;
    cursor: pointer;
  }

  .textButton {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(105%);
      background-color: #fbce33;
      color: #15132b;
      &:active {
        transition: none;
        filter: brightness(75%);
      }
    }
  }

  .sliderButton {
    border-radius: 100%;
    border: none;
    background-color: #fbce33;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(115%);
      &:active {
        transition: none;
        transform: scale(100%);
        filter: brightness(75%);
      }
    }
  }
`;

// EXTERNAL MODULE: external "react-icons/ai/"
var _ = __webpack_require__(886);
;// CONCATENATED MODULE: ./components/button/index.jsx



function Button({ typeButton , content , direction , arrowColor  }) {
    const arrow = ()=>{
        switch(direction){
            case "left":
                return /*#__PURE__*/ jsx_runtime_.jsx(_.AiOutlineArrowLeft, {
                    color: arrowColor,
                    size: "2vw"
                });
            case "right":
                return /*#__PURE__*/ jsx_runtime_.jsx(_.AiOutlineArrowRight, {
                    color: arrowColor,
                    size: "2vw"
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx(_.AiOutlineArrowRight, {
                    color: arrowColor,
                    size: "2vw"
                });
        }
    };
    switch(typeButton){
        case "text":
            return /*#__PURE__*/ jsx_runtime_.jsx(styles_Container, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "textButton",
                    "aria-label": "Acessar",
                    children: content
                })
            });
        case "slider":
            return /*#__PURE__*/ jsx_runtime_.jsx(styles_Container, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "sliderButton",
                    "aria-label": "Pr\xf3ximo",
                    children: arrow()
                })
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Erro: especifique a prop &quot typeButton &quot do bot\xe3o"
            });
    }
}
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./components/card/styles.js

const Card = external_styled_components_default().div.withConfig({
    componentId: "sc-be89a35c-0"
})`
  * {
    font-family: "PlayFair Display", sans-serif;
    font-weight: 400;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3vw;
  background-color: ${(props)=>props.bgColor
};
  padding: 1%;
  padding-top: 1.5%;
  width: 20vw;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(105%);
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2),
      -5px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;

    h2 {
      font-size: 1.25vw;
      text-align: center;
      text-transform: uppercase;
      color: #fbce33;
      letter-spacing: 0.3vw;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5vw;

    hr {
      width: 50%;
      border: 0.1px solid #fbce33;
    }
    p {
      text-align: justify;
      text-align-last: center;
      font-size: 0.9vw;
      letter-spacing: 0.05vw;
    }
  }
`;

;// CONCATENATED MODULE: ./components/card/index.jsx


function card_Card({ color , icon , title , subtitle , children  }) {
    const changeColor = ()=>{
        switch(color){
            case "primary":
                return "#15142b";
            case "secondary":
                return "#1f1f29";
            default:
                return "#1d1b38";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        bgColor: changeColor,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "title",
                children: [
                    icon,
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: subtitle
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const card = (card_Card);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
;// CONCATENATED MODULE: ./components/icon/styles.js

const icon_styles_Container = external_styled_components_default().figure.withConfig({
    componentId: "sc-9c2ede6b-0"
})`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

;// CONCATENATED MODULE: ./components/icon/index.jsx



function Icon() {
    return /*#__PURE__*/ jsx_runtime_.jsx(icon_styles_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillTrophy, {
            color: "#0f1115",
            size: "6vw"
        })
    });
}
/* harmony default export */ const icon = (Icon);

;// CONCATENATED MODULE: ./components/layout/navBar/styles.js

const navBar_styles_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4a11d836-0"
})`
  li {
    font-size: clamp(10px, 1vw, 20px);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: #fbce33;
      transform: scale(105%);
      &:active {
        filter: brightness(75%);
      }
    }
  }
  header {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props)=>props.headerTransparent ? "transparent" : "#0f1115"
};
    filter: ${(props)=>props.headerTransparent ? "none" : "drop-shadow(0px 5px 5px rgba(0,0,0,0.5))"
};
    position: fixed;
    width: 100vw;
    height: 70px;
    padding: 0 10%;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    hr {
      width: 100vw;
      background-color: ${(props)=>props.headerTransparent ? "transparent" : "white"
};
      border: none;
      height: 0.2vw;
      transition: all 0.2s ease-in-out;
    }

    .content {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      height: 100%;
      .left-menu {
        display: flex;
        gap: 10%;
      }

      nav {
        .right-menu {
          display: flex;
          justify-content: end;
          gap: 10%;
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./components/layout/navBar/index.jsx



function NavBar() {
    const { 0: headerTransparent , 1: setHeaderTransparent  } = (0,external_react_.useState)(true);
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(navBar_styles_Container, {
        headerTransparent: headerTransparent,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "left-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Fernando Santana"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Idioma"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "right-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "In\xedcio"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Sobre"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Equipe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Contato"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
            ]
        })
    });
}
/* harmony default export */ const navBar = (NavBar);

;// CONCATENATED MODULE: ./components/layout/footer/styles.js

const footer_styles_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ee3cd1be-0"
})`
  footer {
    background-color: #0f1115;
    height: 150px;
    padding: 0 10%;
    z-index: 1;

    .content {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      height: 100%;
      .left-menu {
        display: flex;
        gap: 10%;
      }

      nav {
        .right-menu {
          display: flex;
          justify-content: end;
          gap: 10%;
          li {
            font-size: clamp(10px, 1vw, 20px);
            text-transform: uppercase;
            cursor: pointer;
            transition: color 0.25s ease-in-out;
            &:hover {
              color: #fbce33;
            }
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./components/layout/footer/index.jsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(footer_styles_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "left-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Footer aqui"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Idioma"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "right-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Facebook"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Instagram"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "YouTube"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "WhatsApp"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/index.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./components/index.js







/***/ })

};
;