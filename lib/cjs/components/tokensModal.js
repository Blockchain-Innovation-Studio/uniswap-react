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
var tokenIcon_1 = __importDefault(require("./tokenIcon"));
var TokensModal = function (_a) {
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, switchSwapCompleted = _a.switchSwapCompleted, changeTokenCompleted = _a.changeTokenCompleted, selectorOpenFrom = _a.selectorOpenFrom, inputToken = _a.inputToken, outputToken = _a.outputToken;
    var _b = react_1.default.useState(''), searchToken = _b[0], setSearchToken = _b[1];
    var searchForToken = function (search) {
        setSearchToken(search);
        uniswapDappSharedLogic.searchToken(search);
    };
    var changeSelectToken = function (contractAddress) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, swapResponse, swapResponse;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = selectorOpenFrom;
                    switch (_a) {
                        case uniswap_dapp_integration_shared_1.SelectTokenActionFrom.input: return [3 /*break*/, 1];
                        case uniswap_dapp_integration_shared_1.SelectTokenActionFrom.output: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 9];
                case 1:
                    if (inputToken.contractAddress === contractAddress) {
                        uniswapDappSharedLogic.hideTokenSelector();
                        return [2 /*return*/];
                    }
                    if (!((outputToken === null || outputToken === void 0 ? void 0 : outputToken.contractAddress) === contractAddress)) return [3 /*break*/, 3];
                    return [4 /*yield*/, uniswapDappSharedLogic.swapSwitch()];
                case 2:
                    swapResponse = _b.sent();
                    switchSwapCompleted(swapResponse);
                    uniswapDappSharedLogic.hideTokenSelector();
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, changeToken(contractAddress)];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
                case 5:
                    if ((outputToken === null || outputToken === void 0 ? void 0 : outputToken.contractAddress) === contractAddress) {
                        uniswapDappSharedLogic.hideTokenSelector();
                        return [2 /*return*/];
                    }
                    if (!(inputToken.contractAddress === contractAddress)) return [3 /*break*/, 7];
                    return [4 /*yield*/, uniswapDappSharedLogic.swapSwitch()];
                case 6:
                    swapResponse = _b.sent();
                    switchSwapCompleted(swapResponse);
                    uniswapDappSharedLogic.hideTokenSelector();
                    return [2 /*return*/];
                case 7: return [4 /*yield*/, changeToken(contractAddress)];
                case 8:
                    _b.sent();
                    return [2 /*return*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var changeToken = function (contractAddress) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, uniswapDappSharedLogic.changeToken(contractAddress)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.code) === uniswap_dapp_integration_shared_1.ErrorCodes.noRoutesFound) {
                        changeTokenCompleted(true);
                        return [2 /*return*/];
                    }
                    else {
                        throw error_1;
                    }
                    return [3 /*break*/, 3];
                case 3:
                    changeTokenCompleted(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var utils = uniswap_dapp_integration_shared_1.Utils;
    return (react_1.default.createElement("div", null, uniswapDappSharedLogic.supportedNetwork && (react_1.default.createElement("div", { id: "uni-ic__modal-token", className: "uni-ic__modal" },
        react_1.default.createElement("div", { className: "uni-ic__modal__content uni-ic__modal-tokens uni-ic__theme-background" },
            react_1.default.createElement("span", { className: "uni-ic__modal__close", onClick: function () { return uniswapDappSharedLogic.hideTokenSelector(); } }, "\u00D7"),
            react_1.default.createElement("p", { className: "uni-ic__modal-tokens-title" }, "Select a token"),
            react_1.default.createElement("div", { className: "uni-ic__modal-tokens-search" },
                react_1.default.createElement("input", { type: "text", placeholder: "Search name or paste address", className: "uni-ic__modal-tokens-search__input", value: searchToken, onChange: function (e) {
                        searchForToken(e.target.value);
                    } })),
            react_1.default.createElement("div", { style: { flex: '1 1 0%', position: 'relative' } },
                react_1.default.createElement("div", { style: { overflow: 'visible', height: '0px' } },
                    react_1.default.createElement("div", { style: {
                            position: 'relative',
                            height: '210px',
                            width: '100%',
                            overflow: 'auto',
                            willChange: 'transform',
                            direction: 'ltr',
                        } },
                        react_1.default.createElement("div", { style: { height: '100%', width: '100%' } }, uniswapDappSharedLogic.supportedTokenBalances.map(function (token) {
                            var _a;
                            return (react_1.default.createElement("div", { key: token.name, onClick: function () {
                                    return changeSelectToken(token.contractAddress);
                                }, className: "uni-ic__modal-tokens-item-container " + ((token.contractAddress ===
                                    uniswapDappSharedLogic.inputToken
                                        .contractAddress &&
                                    selectorOpenFrom === 'input') ||
                                    (token.contractAddress ===
                                        ((_a = uniswapDappSharedLogic.outputToken) === null || _a === void 0 ? void 0 : _a.contractAddress) &&
                                        selectorOpenFrom === 'output')
                                    ? 'selected'
                                    : '') }, token.canShow && (react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item" },
                                react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__modal-tokens-item-icon", tokenImageContext: token.tokenImageContext }),
                                react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item-content" },
                                    react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item-content-symbol" }, token.symbol),
                                    react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item-content-name" }, token.name)),
                                react_1.default.createElement("span", null),
                                react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item-balance-content" },
                                    react_1.default.createElement("div", { className: "uni-ic__modal-tokens-item-balance-content-value" }, utils.toPrecision(token.balance)))))));
                        })))),
                react_1.default.createElement("div", { className: "resize-triggers" },
                    react_1.default.createElement("div", { className: "expand-trigger" },
                        react_1.default.createElement("div", { style: { width: '419px', height: '211px' } })),
                    react_1.default.createElement("div", { className: "contract-trigger" }))))))));
};
exports.default = TokensModal;
