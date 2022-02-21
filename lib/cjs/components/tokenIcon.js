"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TokenIcon = function (_a) {
    var classes = _a.classes, tokenImageContext = _a.tokenImageContext;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !tokenImageContext.isSvg && (react_1.default.createElement("img", { src: tokenImageContext.image, className: classes })),
        tokenImageContext.isSvg && (react_1.default.createElement("span", { className: classes },
            react_1.default.createElement("span", { dangerouslySetInnerHTML: {
                    __html: tokenImageContext.image,
                } })))));
};
exports.default = TokenIcon;
