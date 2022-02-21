"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Loading = function () { return (react_1.default.createElement("div", { className: "uni-ic__loading" },
    react_1.default.createElement("svg", { className: "uni-ic__loading__svg-container", height: "100", width: "100", viewBox: "0 0 100 100" },
        react_1.default.createElement("circle", { className: "uni-ic__loading__svg bg", cx: "50", cy: "50", r: "45" }),
        react_1.default.createElement("circle", { className: "uni-ic__loading__svg animate", cx: "50", cy: "50", r: "45" })))); };
exports.default = Loading;
