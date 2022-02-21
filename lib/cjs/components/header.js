"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uniswap_dapp_integration_shared_1 = require("uniswap-dapp-integration-shared");
var Header = function (_a) {
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, disableMultihopsCompleted = _a.disableMultihopsCompleted;
    var _b = react_1.default.useState(undefined), slippageCustom = _b[0], setSlippageCustom = _b[1];
    var _c = react_1.default.useState(uniswapDappSharedLogic.uniswapPairSettings.deadlineMinutes), transactionDeadline = _c[0], setTransactionDeadline = _c[1];
    var _d = react_1.default.useState(uniswapDappSharedLogic.uniswapPairSettings.slippage), slippage = _d[0], setSlippage = _d[1];
    var _e = react_1.default.useState(uniswapDappSharedLogic.uniswapPairSettings.disableMultihops), disableMultihops = _e[0], setDisableMultihops = _e[1];
    var setUniswapSlippage = function (slippageAmount, isCustom) {
        if (isCustom === void 0) { isCustom = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (slippageAmount === 0) {
                            slippageAmount = 0.5;
                        }
                        return [4 /*yield*/, uniswapDappSharedLogic.setSlippage(slippageAmount)];
                    case 1:
                        _a.sent();
                        setSlippage(slippageAmount / 100);
                        if (isCustom) {
                            setSlippageCustom(slippage);
                        }
                        else {
                            setSlippageCustom(undefined);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var setUniswapTransactionDeadline = function (deadline) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, uniswapDappSharedLogic.setTransactionDeadline(deadline)];
                case 1:
                    _a.sent();
                    setTransactionDeadline(deadline);
                    return [2 /*return*/];
            }
        });
    }); };
    var setUniswapDisableMultihops = function (isDisabled) { return __awaiter(void 0, void 0, void 0, function () {
        var noLiquidityFound, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    noLiquidityFound = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, uniswapDappSharedLogic.setDisableMultihops(isDisabled)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.code) === uniswap_dapp_integration_shared_1.ErrorCodes.noRoutesFound) {
                        noLiquidityFound = true;
                    }
                    else {
                        throw error_1;
                    }
                    return [3 /*break*/, 4];
                case 4:
                    setDisableMultihops(isDisabled);
                    disableMultihopsCompleted(noLiquidityFound);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "uni-ic__header-container" },
        react_1.default.createElement("div", { className: "uni-ic__header-content" },
            react_1.default.createElement("div", { className: "uni-ic__header-content-title" }, "Swap"),
            react_1.default.createElement("div", { className: "uni-ic__header-content-settings" },
                react_1.default.createElement("button", { className: "uni-ic__header-content-settings-button", onClick: function () { return uniswapDappSharedLogic.toggleSettings(); } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "sc-gbOuXE daxFHC" },
                        react_1.default.createElement("circle", { "_ngcontent-exx-c45": "", cx: "12", cy: "12", r: "3" }),
                        react_1.default.createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }))),
                react_1.default.createElement("span", { className: "uni-ic__settings-container uni-ic-hidden uni-ic__theme-panel" },
                    react_1.default.createElement("div", { className: "uni-ic__settings" },
                        react_1.default.createElement("div", { className: "uni-ic__settings-transaction-title" }, "Transaction Settings"),
                        react_1.default.createElement("div", { className: "uni-ic__settings-transaction" },
                            react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-container" },
                                react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage" },
                                    react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-title" }, "Slippage tolerance"),
                                    react_1.default.createElement("span", { style: { marginLeft: '4px' } },
                                        react_1.default.createElement("div", { style: { display: 'inline' } },
                                            react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-info" },
                                                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                                    react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                                    react_1.default.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
                                                    react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                                                react_1.default.createElement("div", { className: "uni-ic__tooltip-wrapper" },
                                                    react_1.default.createElement("div", { className: "uni-ic__tooltip-container" },
                                                        react_1.default.createElement("div", { className: "uni-ic__tooltip" },
                                                            react_1.default.createElement("span", null, "Your transaction will revert if the price changes unfavourably by more then this percentage.")))))))),
                                react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-options" },
                                    react_1.default.createElement("button", { className: "uni-ic__settings-transaction-slippage-option " + (slippage === 0.001 ? 'selected' : ''), onClick: function () { return setUniswapSlippage(0.1); } }, "0.1%"),
                                    react_1.default.createElement("button", { className: "uni-ic__settings-transaction-slippage-option " + (slippage === 0.005 ? 'selected' : ''), onClick: function () { return setUniswapSlippage(0.5); } }, "0.5%"),
                                    react_1.default.createElement("button", { className: "uni-ic__settings-transaction-slippage-option " + (slippage === 0.01 ? 'selected' : ''), onClick: function () { return setUniswapSlippage(1); } }, "1%"),
                                    react_1.default.createElement("button", { className: "uni-ic__settings-transaction-slippage-manual " + (slippage !== 0.01 &&
                                            slippage !== 0.005 &&
                                            slippage !== 0.001
                                            ? 'selected'
                                            : '') },
                                        react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-manual-content" },
                                            react_1.default.createElement("input", { placeholder: "custom", type: "number", step: "any", className: "uni-ic__settings-transaction-slippage-manual-input", value: slippageCustom, onChange: function (e) {
                                                    setUniswapSlippage(Number(e.target.value));
                                                } }),
                                            "%"))),
                                react_1.default.createElement("div", { className: "uni-ic__settings-transaction-slippage-warning" },
                                    slippage > 0.01 && (react_1.default.createElement("span", null, "Your transaction may be frontrun")),
                                    0.0005 > slippage && (react_1.default.createElement("span", null, "Your transaction may fail")))),
                            react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline-container" },
                                react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline" },
                                    react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline-title" }, "Transaction deadline"),
                                    react_1.default.createElement("span", { style: { marginLeft: '4px' } },
                                        react_1.default.createElement("div", { style: { display: 'inline' } },
                                            react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline-info" },
                                                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                                    react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                                    react_1.default.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
                                                    react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                                                react_1.default.createElement("div", { className: "uni-ic__tooltip-wrapper" },
                                                    react_1.default.createElement("div", { className: "uni-ic__tooltip-container" },
                                                        react_1.default.createElement("div", { className: "uni-ic__tooltip" },
                                                            react_1.default.createElement("span", null, "The transaction will revert if it is pending for more than this period of time.")))))))),
                                react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline-minute" },
                                    react_1.default.createElement("button", { className: "uni-ic__settings-transaction-deadline-minute-button" },
                                        react_1.default.createElement("input", { placeholder: "20", className: "uni-ic__settings-transaction-deadline-minute-input", type: "number", min: "1", step: "1", value: transactionDeadline, onChange: function (e) {
                                                setUniswapTransactionDeadline(Number(e.target.value));
                                            } })),
                                    react_1.default.createElement("div", { className: "uni-ic__settings-transaction-deadline-minute-label" }, "minutes")))),
                        react_1.default.createElement("div", { className: "uni-ic__settings-interface-header" }, "Interface Settings"),
                        react_1.default.createElement("div", { className: "uni-ic__settings-interface-multihops-container" },
                            react_1.default.createElement("div", { className: "uni-ic__settings-interface-multihops-text-container" },
                                react_1.default.createElement("div", { className: "uni-ic__settings-interface-multihops-text" }, "Disable Multihops"),
                                react_1.default.createElement("span", { style: { marginLeft: '4px' } },
                                    react_1.default.createElement("div", { style: { display: 'inline-block' } },
                                        react_1.default.createElement("div", { className: "uni-ic__settings-interface-multihops-text-info" },
                                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                                react_1.default.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
                                                react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                                            react_1.default.createElement("div", { className: "uni-ic__tooltip-wrapper" },
                                                react_1.default.createElement("div", { className: "uni-ic__tooltip-container" },
                                                    react_1.default.createElement("div", { className: "uni-ic__tooltip" },
                                                        react_1.default.createElement("span", null, "Restricts swap to direct pairs only ")))))))),
                            react_1.default.createElement("button", { className: "uni-ic__settings-interface-multihops-actions" },
                                react_1.default.createElement("span", { onClick: function () { return setUniswapDisableMultihops(true); }, className: "uni-ic__settings-interface-multihops-actions-on " + (disableMultihops ? 'selected' : '') }, "On"),
                                react_1.default.createElement("span", { onClick: function () { return setUniswapDisableMultihops(false); }, className: "uni-ic__settings-interface-multihops-actions-off " + (!disableMultihops ? 'selected' : '') }, "Off")))))))));
};
exports.default = Header;
