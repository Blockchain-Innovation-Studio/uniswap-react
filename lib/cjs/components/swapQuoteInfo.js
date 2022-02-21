"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SwapQuoteInfo = function (_a) {
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, tradeContext = _a.tradeContext;
    return (react_1.default.createElement("div", { className: "uni-ic__swap-quote" },
        react_1.default.createElement("div", { className: "uni-ic__swap-quote-container" },
            react_1.default.createElement("div", { className: "uni-ic__swap-quote-price" },
                react_1.default.createElement("div", { color: "text", className: "uni-ic__swap-quote-price-text", style: {
                        padding: '0.1rem 0.5rem 0.1rem 0.35rem',
                        fontSize: '14px',
                    } },
                    react_1.default.createElement("span", null,
                        "Best rate on ",
                        tradeContext.uniswapVersion)),
                react_1.default.createElement("div", { color: "text", className: "uni-ic__swap-quote-price-text", style: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        fontSize: '14px',
                    } },
                    react_1.default.createElement("span", null,
                        "1 ",
                        tradeContext.fromToken.symbol,
                        " =",
                        ' ',
                        uniswapDappSharedLogic.workOutOneEqualTo(),
                        ' ',
                        tradeContext.toToken.symbol),
                    react_1.default.createElement("div", { className: "uni-ic__swap-quote-price-text-info" },
                        react_1.default.createElement("div", { style: {
                                padding: '0.25rem',
                                lineHeight: '0',
                                display: 'inline-block',
                            } },
                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                react_1.default.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                                react_1.default.createElement("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }))),
                        react_1.default.createElement("div", { className: "uni-ic__tooltip-wrapper", style: {
                                right: '10px',
                            } },
                            react_1.default.createElement("div", { className: "uni-ic__tooltip-container" },
                                react_1.default.createElement("div", { className: "uni-ic__tooltip" },
                                    react_1.default.createElement("div", { className: "uni-ic__tooltip__item" },
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title" },
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title__content" }, "Liquidity Provider Fee")),
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__value" },
                                            tradeContext.liquidityProviderFee,
                                            ' ',
                                            tradeContext.fromToken.symbol)),
                                    react_1.default.createElement("div", { className: "uni-ic__tooltip__item" },
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title" },
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title__content" }, "Route")),
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__value" }, tradeContext.routeText)),
                                    tradeContext.minAmountConvertQuote && (react_1.default.createElement("div", { className: "uni-ic__tooltip__item" },
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title" },
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title__content" }, "Minimum received")),
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__value" },
                                            tradeContext.minAmountConvertQuote,
                                            ' ',
                                            tradeContext.toToken.symbol))),
                                    tradeContext.maximumSent && (react_1.default.createElement("div", { className: "uni-ic__tooltip__item" },
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title" },
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title__content" }, "Maximum sent")),
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__value" },
                                            tradeContext.maximumSent,
                                            ' ',
                                            tradeContext.fromToken.symbol))),
                                    react_1.default.createElement("div", { className: "uni-ic__tooltip__item" },
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title" },
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip__item__title__content" }, "Slippage tolerance")),
                                        react_1.default.createElement("div", { className: "uni-ic__tooltip__item__value" },
                                            uniswapDappSharedLogic.uniswapPairSettings
                                                .slippage * 100,
                                            "%")))))))))));
};
exports.default = SwapQuoteInfo;
