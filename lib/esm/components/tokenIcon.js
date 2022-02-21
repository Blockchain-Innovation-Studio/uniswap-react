import React from 'react';
var TokenIcon = function (_a) {
    var classes = _a.classes, tokenImageContext = _a.tokenImageContext;
    return (React.createElement(React.Fragment, null,
        !tokenImageContext.isSvg && (React.createElement("img", { src: tokenImageContext.image, className: classes })),
        tokenImageContext.isSvg && (React.createElement("span", { className: classes },
            React.createElement("span", { dangerouslySetInnerHTML: {
                    __html: tokenImageContext.image,
                } })))));
};
export default TokenIcon;
