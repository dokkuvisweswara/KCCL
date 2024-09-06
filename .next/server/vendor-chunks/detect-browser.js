"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-browser";
exports.ids = ["vendor-chunks/detect-browser"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotInfo: () => (/* binding */ BotInfo),\n/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),\n/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),\n/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),\n/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),\n/* harmony export */   browserName: () => (/* binding */ browserName),\n/* harmony export */   detect: () => (/* binding */ detect),\n/* harmony export */   detectOS: () => (/* binding */ detectOS),\n/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),\n/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)\n/* harmony export */ });\nvar __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {\n    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar BrowserInfo = /** @class */ function() {\n    function BrowserInfo(name, version, os) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.type = \"browser\";\n    }\n    return BrowserInfo;\n}();\n\nvar NodeInfo = /** @class */ function() {\n    function NodeInfo(version) {\n        this.version = version;\n        this.type = \"node\";\n        this.name = \"node\";\n        this.os = process.platform;\n    }\n    return NodeInfo;\n}();\n\nvar SearchBotDeviceInfo = /** @class */ function() {\n    function SearchBotDeviceInfo(name, version, os, bot) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.bot = bot;\n        this.type = \"bot-device\";\n    }\n    return SearchBotDeviceInfo;\n}();\n\nvar BotInfo = /** @class */ function() {\n    function BotInfo() {\n        this.type = \"bot\";\n        this.bot = true; // NOTE: deprecated test name instead\n        this.name = \"bot\";\n        this.version = null;\n        this.os = null;\n    }\n    return BotInfo;\n}();\n\nvar ReactNativeInfo = /** @class */ function() {\n    function ReactNativeInfo() {\n        this.type = \"react-native\";\n        this.name = \"react-native\";\n        this.version = null;\n        this.os = null;\n    }\n    return ReactNativeInfo;\n}();\n\n// tslint:disable-next-line:max-line-length\nvar SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;\nvar SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\\ Jeeves\\/Teoma|ia_archiver)/;\nvar REQUIRED_VERSION_PARTS = 3;\nvar userAgentRules = [\n    [\n        \"aol\",\n        /AOLShield\\/([0-9\\._]+)/\n    ],\n    [\n        \"edge\",\n        /Edge\\/([0-9\\._]+)/\n    ],\n    [\n        \"edge-ios\",\n        /EdgiOS\\/([0-9\\._]+)/\n    ],\n    [\n        \"yandexbrowser\",\n        /YaBrowser\\/([0-9\\._]+)/\n    ],\n    [\n        \"kakaotalk\",\n        /KAKAOTALK\\s([0-9\\.]+)/\n    ],\n    [\n        \"samsung\",\n        /SamsungBrowser\\/([0-9\\.]+)/\n    ],\n    [\n        \"silk\",\n        /\\bSilk\\/([0-9._-]+)\\b/\n    ],\n    [\n        \"miui\",\n        /MiuiBrowser\\/([0-9\\.]+)$/\n    ],\n    [\n        \"beaker\",\n        /BeakerBrowser\\/([0-9\\.]+)/\n    ],\n    [\n        \"edge-chromium\",\n        /EdgA?\\/([0-9\\.]+)/\n    ],\n    [\n        \"chromium-webview\",\n        /(?!Chrom.*OPR)wv\\).*Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"chrome\",\n        /(?!Chrom.*OPR)Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"phantomjs\",\n        /PhantomJS\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"crios\",\n        /CriOS\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"firefox\",\n        /Firefox\\/([0-9\\.]+)(?:\\s|$)/\n    ],\n    [\n        \"fxios\",\n        /FxiOS\\/([0-9\\.]+)/\n    ],\n    [\n        \"opera-mini\",\n        /Opera Mini.*Version\\/([0-9\\.]+)/\n    ],\n    [\n        \"opera\",\n        /Opera\\/([0-9\\.]+)(?:\\s|$)/\n    ],\n    [\n        \"opera\",\n        /OPR\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"pie\",\n        /^Microsoft Pocket Internet Explorer\\/(\\d+\\.\\d+)$/\n    ],\n    [\n        \"pie\",\n        /^Mozilla\\/\\d\\.\\d+\\s\\(compatible;\\s(?:MSP?IE|MSInternet Explorer) (\\d+\\.\\d+);.*Windows CE.*\\)$/\n    ],\n    [\n        \"netfront\",\n        /^Mozilla\\/\\d\\.\\d+.*NetFront\\/(\\d.\\d)/\n    ],\n    [\n        \"ie\",\n        /Trident\\/7\\.0.*rv\\:([0-9\\.]+).*\\).*Gecko$/\n    ],\n    [\n        \"ie\",\n        /MSIE\\s([0-9\\.]+);.*Trident\\/[4-7].0/\n    ],\n    [\n        \"ie\",\n        /MSIE\\s(7\\.0)/\n    ],\n    [\n        \"bb10\",\n        /BB10;\\sTouch.*Version\\/([0-9\\.]+)/\n    ],\n    [\n        \"android\",\n        /Android\\s([0-9\\.]+)/\n    ],\n    [\n        \"ios\",\n        /Version\\/([0-9\\._]+).*Mobile.*Safari.*/\n    ],\n    [\n        \"safari\",\n        /Version\\/([0-9\\._]+).*Safari/\n    ],\n    [\n        \"facebook\",\n        /FB[AS]V\\/([0-9\\.]+)/\n    ],\n    [\n        \"instagram\",\n        /Instagram\\s([0-9\\.]+)/\n    ],\n    [\n        \"ios-webview\",\n        /AppleWebKit\\/([0-9\\.]+).*Mobile/\n    ],\n    [\n        \"ios-webview\",\n        /AppleWebKit\\/([0-9\\.]+).*Gecko\\)$/\n    ],\n    [\n        \"curl\",\n        /^curl\\/([0-9\\.]+)$/\n    ],\n    [\n        \"searchbot\",\n        SEARCHBOX_UA_REGEX\n    ]\n];\nvar operatingSystemRules = [\n    [\n        \"iOS\",\n        /iP(hone|od|ad)/\n    ],\n    [\n        \"Android OS\",\n        /Android/\n    ],\n    [\n        \"BlackBerry OS\",\n        /BlackBerry|BB10/\n    ],\n    [\n        \"Windows Mobile\",\n        /IEMobile/\n    ],\n    [\n        \"Amazon OS\",\n        /Kindle/\n    ],\n    [\n        \"Windows 3.11\",\n        /Win16/\n    ],\n    [\n        \"Windows 95\",\n        /(Windows 95)|(Win95)|(Windows_95)/\n    ],\n    [\n        \"Windows 98\",\n        /(Windows 98)|(Win98)/\n    ],\n    [\n        \"Windows 2000\",\n        /(Windows NT 5.0)|(Windows 2000)/\n    ],\n    [\n        \"Windows XP\",\n        /(Windows NT 5.1)|(Windows XP)/\n    ],\n    [\n        \"Windows Server 2003\",\n        /(Windows NT 5.2)/\n    ],\n    [\n        \"Windows Vista\",\n        /(Windows NT 6.0)/\n    ],\n    [\n        \"Windows 7\",\n        /(Windows NT 6.1)/\n    ],\n    [\n        \"Windows 8\",\n        /(Windows NT 6.2)/\n    ],\n    [\n        \"Windows 8.1\",\n        /(Windows NT 6.3)/\n    ],\n    [\n        \"Windows 10\",\n        /(Windows NT 10.0)/\n    ],\n    [\n        \"Windows ME\",\n        /Windows ME/\n    ],\n    [\n        \"Windows CE\",\n        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/\n    ],\n    [\n        \"Open BSD\",\n        /OpenBSD/\n    ],\n    [\n        \"Sun OS\",\n        /SunOS/\n    ],\n    [\n        \"Chrome OS\",\n        /CrOS/\n    ],\n    [\n        \"Linux\",\n        /(Linux)|(X11)/\n    ],\n    [\n        \"Mac OS\",\n        /(Mac_PowerPC)|(Macintosh)/\n    ],\n    [\n        \"QNX\",\n        /QNX/\n    ],\n    [\n        \"BeOS\",\n        /BeOS/\n    ],\n    [\n        \"OS/2\",\n        /OS\\/2/\n    ]\n];\nfunction detect(userAgent) {\n    if (!!userAgent) {\n        return parseUserAgent(userAgent);\n    }\n    if (typeof document === \"undefined\" && typeof navigator !== \"undefined\" && navigator.product === \"ReactNative\") {\n        return new ReactNativeInfo();\n    }\n    if (typeof navigator !== \"undefined\") {\n        return parseUserAgent(navigator.userAgent);\n    }\n    return getNodeVersion();\n}\nfunction matchUserAgent(ua) {\n    // opted for using reduce here rather than Array#first with a regex.test call\n    // this is primarily because using the reduce we only perform the regex\n    // execution once rather than once for the test and for the exec again below\n    // probably something that needs to be benchmarked though\n    return ua !== \"\" && userAgentRules.reduce(function(matched, _a) {\n        var browser = _a[0], regex = _a[1];\n        if (matched) {\n            return matched;\n        }\n        var uaMatch = regex.exec(ua);\n        return !!uaMatch && [\n            browser,\n            uaMatch\n        ];\n    }, false);\n}\nfunction browserName(ua) {\n    var data = matchUserAgent(ua);\n    return data ? data[0] : null;\n}\nfunction parseUserAgent(ua) {\n    var matchedRule = matchUserAgent(ua);\n    if (!matchedRule) {\n        return null;\n    }\n    var name = matchedRule[0], match = matchedRule[1];\n    if (name === \"searchbot\") {\n        return new BotInfo();\n    }\n    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)\n    var versionParts = match[1] && match[1].split(\".\").join(\"_\").split(\"_\").slice(0, 3);\n    if (versionParts) {\n        if (versionParts.length < REQUIRED_VERSION_PARTS) {\n            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);\n        }\n    } else {\n        versionParts = [];\n    }\n    var version = versionParts.join(\".\");\n    var os = detectOS(ua);\n    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);\n    if (searchBotMatch && searchBotMatch[1]) {\n        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);\n    }\n    return new BrowserInfo(name, version, os);\n}\nfunction detectOS(ua) {\n    for(var ii = 0, count = operatingSystemRules.length; ii < count; ii++){\n        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];\n        var match = regex.exec(ua);\n        if (match) {\n            return os;\n        }\n    }\n    return null;\n}\nfunction getNodeVersion() {\n    var isNode = typeof process !== \"undefined\" && process.version;\n    return isNode ? new NodeInfo(process.version.slice(1)) : null;\n}\nfunction createVersionParts(count) {\n    var output = [];\n    for(var ii = 0; ii < count; ii++){\n        output.push(\"0\");\n    }\n    return output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGdCQUFnQixTQUFLLElBQUksU0FBSSxDQUFDQSxhQUFhLElBQUssU0FBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7SUFDeEUsSUFBSUEsUUFBUUMsVUFBVUMsTUFBTSxLQUFLLEdBQUcsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLElBQUlMLEtBQUtHLE1BQU0sRUFBRUcsSUFBSUYsSUFBSUMsR0FBR0QsSUFBSztRQUNqRixJQUFJRSxNQUFNLENBQUVGLENBQUFBLEtBQUtKLElBQUcsR0FBSTtZQUNwQixJQUFJLENBQUNNLElBQUlBLEtBQUtDLE1BQU1DLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNWLE1BQU0sR0FBR0k7WUFDbERFLEVBQUUsQ0FBQ0YsRUFBRSxHQUFHSixJQUFJLENBQUNJLEVBQUU7UUFDbkI7SUFDSjtJQUNBLE9BQU9MLEdBQUdZLE1BQU0sQ0FBQ0wsTUFBTUMsTUFBTUMsU0FBUyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ1Y7QUFDdEQ7QUFDQSxJQUFJWSxjQUFjLFdBQVcsR0FBSTtJQUM3QixTQUFTQSxZQUFZQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsRUFBRTtRQUNsQyxJQUFJLENBQUNGLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLEVBQUUsR0FBR0E7UUFDVixJQUFJLENBQUNDLElBQUksR0FBRztJQUNoQjtJQUNBLE9BQU9KO0FBQ1g7QUFDdUI7QUFDdkIsSUFBSUssV0FBVyxXQUFXLEdBQUk7SUFDMUIsU0FBU0EsU0FBU0gsT0FBTztRQUNyQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNFLElBQUksR0FBRztRQUNaLElBQUksQ0FBQ0gsSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDRSxFQUFF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QXFCekIsTUFBTSxFQUFFb0QsS0FBS0MsT0FBT0QsS0FBTTtRQUNwRSxJQUFJZixLQUFLWixvQkFBb0IsQ0FBQzJCLEdBQUcsRUFBRXhDLEtBQUt5QixFQUFFLENBQUMsRUFBRSxFQUFFRSxRQUFRRixFQUFFLENBQUMsRUFBRTtRQUM1RCxJQUFJUSxRQUFRTixNQUFNRSxJQUFJLENBQUNQO1FBQ3ZCLElBQUlXLE9BQU87WUFDUCxPQUFPakM7UUFDWDtJQUNKO0lBQ0EsT0FBTztBQUNYO0FBQ08sU0FBU29CO0lBQ1osSUFBSXNCLFNBQVMsT0FBT3ZDLFlBQVksZUFBZUEsUUFBUUosT0FBTztJQUM5RCxPQUFPMkMsU0FBUyxJQUFJeEMsU0FBU0MsUUFBUUosT0FBTyxDQUFDTCxLQUFLLENBQUMsTUFBTTtBQUM3RDtBQUNBLFNBQVMyQyxtQkFBbUJJLEtBQUs7SUFDN0IsSUFBSUUsU0FBUyxFQUFFO0lBQ2YsSUFBSyxJQUFJSCxLQUFLLEdBQUdBLEtBQUtDLE9BQU9ELEtBQU07UUFDL0JHLE9BQU9DLElBQUksQ0FBQztJQUNoQjtJQUNBLE9BQU9EO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJvcmltZWRpYWltcGwvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvZXMvaW5kZXguanM/ZWYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgQnJvd3NlckluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlckluZm8obmFtZSwgdmVyc2lvbiwgb3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcyA9IG9zO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnJvd3Nlcic7XG4gICAgfVxuICAgIHJldHVybiBCcm93c2VySW5mbztcbn0oKSk7XG5leHBvcnQgeyBCcm93c2VySW5mbyB9O1xudmFyIE5vZGVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVJbmZvKHZlcnNpb24pIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy50eXBlID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMub3MgPSBwcm9jZXNzLnBsYXRmb3JtO1xuICAgIH1cbiAgICByZXR1cm4gTm9kZUluZm87XG59KCkpO1xuZXhwb3J0IHsgTm9kZUluZm8gfTtcbnZhciBTZWFyY2hCb3REZXZpY2VJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIGJvdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMuYm90ID0gYm90O1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm90LWRldmljZSc7XG4gICAgfVxuICAgIHJldHVybiBTZWFyY2hCb3REZXZpY2VJbmZvO1xufSgpKTtcbmV4cG9ydCB7IFNlYXJjaEJvdERldmljZUluZm8gfTtcbnZhciBCb3RJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdEluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QnO1xuICAgICAgICB0aGlzLmJvdCA9IHRydWU7IC8vIE5PVEU6IGRlcHJlY2F0ZWQgdGVzdCBuYW1lIGluc3RlYWRcbiAgICAgICAgdGhpcy5uYW1lID0gJ2JvdCc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQm90SW5mbztcbn0oKSk7XG5leHBvcnQgeyBCb3RJbmZvIH07XG52YXIgUmVhY3ROYXRpdmVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0TmF0aXZlSW5mbygpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ3JlYWN0LW5hdGl2ZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9zID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0TmF0aXZlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBSZWFjdE5hdGl2ZUluZm8gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbnZhciBTRUFSQ0hCT1hfVUFfUkVHRVggPSAvYWxleGF8Ym90fGNyYXdsKGVyfGluZyl8ZmFjZWJvb2tleHRlcm5hbGhpdHxmZWVkYnVybmVyfGdvb2dsZSB3ZWIgcHJldmlld3xuYWdpb3N8cG9zdHJhbmt8cGluZ2RvbXxzbHVycHxzcGlkZXJ8eWFob28hfHlhbmRleC87XG52YXIgU0VBUkNIQk9UX09TX1JFR0VYID0gLyhudWhrfGN1cmx8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFza1xcIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS87XG52YXIgUkVRVUlSRURfVkVSU0lPTl9QQVJUUyA9IDM7XG52YXIgdXNlckFnZW50UnVsZXMgPSBbXG4gICAgWydhb2wnLCAvQU9MU2hpZWxkXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlJywgL0VkZ2VcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UtaW9zJywgL0VkZ2lPU1xcLyhbMC05XFwuX10rKS9dLFxuICAgIFsneWFuZGV4YnJvd3NlcicsIC9ZYUJyb3dzZXJcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2tha2FvdGFsaycsIC9LQUtBT1RBTEtcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnc2Ftc3VuZycsIC9TYW1zdW5nQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydzaWxrJywgL1xcYlNpbGtcXC8oWzAtOS5fLV0rKVxcYi9dLFxuICAgIFsnbWl1aScsIC9NaXVpQnJvd3NlclxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnYmVha2VyJywgL0JlYWtlckJyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnZWRnZS1jaHJvbWl1bScsIC9FZGdBP1xcLyhbMC05XFwuXSspL10sXG4gICAgW1xuICAgICAgICAnY2hyb21pdW0td2VidmlldycsXG4gICAgICAgIC8oPyFDaHJvbS4qT1BSKXd2XFwpLipDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpLyxcbiAgICBdLFxuICAgIFsnY2hyb21lJywgLyg/IUNocm9tLipPUFIpQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGhhbnRvbWpzJywgL1BoYW50b21KU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydjcmlvcycsIC9DcmlPU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydmaXJlZm94JywgL0ZpcmVmb3hcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnZnhpb3MnLCAvRnhpT1NcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEtbWluaScsIC9PcGVyYSBNaW5pLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhJywgL09wZXJhXFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ29wZXJhJywgL09QUlxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydwaWUnLCAvXk1pY3Jvc29mdCBQb2NrZXQgSW50ZXJuZXQgRXhwbG9yZXJcXC8oXFxkK1xcLlxcZCspJC9dLFxuICAgIFsncGllJywgL15Nb3ppbGxhXFwvXFxkXFwuXFxkK1xcc1xcKGNvbXBhdGlibGU7XFxzKD86TVNQP0lFfE1TSW50ZXJuZXQgRXhwbG9yZXIpIChcXGQrXFwuXFxkKyk7LipXaW5kb3dzIENFLipcXCkkL10sXG4gICAgWyduZXRmcm9udCcsIC9eTW96aWxsYVxcL1xcZFxcLlxcZCsuKk5ldEZyb250XFwvKFxcZC5cXGQpL10sXG4gICAgWydpZScsIC9UcmlkZW50XFwvN1xcLjAuKnJ2XFw6KFswLTlcXC5dKykuKlxcKS4qR2Vja28kL10sXG4gICAgWydpZScsIC9NU0lFXFxzKFswLTlcXC5dKyk7LipUcmlkZW50XFwvWzQtN10uMC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyg3XFwuMCkvXSxcbiAgICBbJ2JiMTAnLCAvQkIxMDtcXHNUb3VjaC4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydhbmRyb2lkJywgL0FuZHJvaWRcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKk1vYmlsZS4qU2FmYXJpLiovXSxcbiAgICBbJ3NhZmFyaScsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipTYWZhcmkvXSxcbiAgICBbJ2ZhY2Vib29rJywgL0ZCW0FTXVZcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnaW5zdGFncmFtJywgL0luc3RhZ3JhbVxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipNb2JpbGUvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKkdlY2tvXFwpJC9dLFxuICAgIFsnY3VybCcsIC9eY3VybFxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnc2VhcmNoYm90JywgU0VBUkNIQk9YX1VBX1JFR0VYXSxcbl07XG52YXIgb3BlcmF0aW5nU3lzdGVtUnVsZXMgPSBbXG4gICAgWydpT1MnLCAvaVAoaG9uZXxvZHxhZCkvXSxcbiAgICBbJ0FuZHJvaWQgT1MnLCAvQW5kcm9pZC9dLFxuICAgIFsnQmxhY2tCZXJyeSBPUycsIC9CbGFja0JlcnJ5fEJCMTAvXSxcbiAgICBbJ1dpbmRvd3MgTW9iaWxlJywgL0lFTW9iaWxlL10sXG4gICAgWydBbWF6b24gT1MnLCAvS2luZGxlL10sXG4gICAgWydXaW5kb3dzIDMuMTEnLCAvV2luMTYvXSxcbiAgICBbJ1dpbmRvd3MgOTUnLCAvKFdpbmRvd3MgOTUpfChXaW45NSl8KFdpbmRvd3NfOTUpL10sXG4gICAgWydXaW5kb3dzIDk4JywgLyhXaW5kb3dzIDk4KXwoV2luOTgpL10sXG4gICAgWydXaW5kb3dzIDIwMDAnLCAvKFdpbmRvd3MgTlQgNS4wKXwoV2luZG93cyAyMDAwKS9dLFxuICAgIFsnV2luZG93cyBYUCcsIC8oV2luZG93cyBOVCA1LjEpfChXaW5kb3dzIFhQKS9dLFxuICAgIFsnV2luZG93cyBTZXJ2ZXIgMjAwMycsIC8oV2luZG93cyBOVCA1LjIpL10sXG4gICAgWydXaW5kb3dzIFZpc3RhJywgLyhXaW5kb3dzIE5UIDYuMCkvXSxcbiAgICBbJ1dpbmRvd3MgNycsIC8oV2luZG93cyBOVCA2LjEpL10sXG4gICAgWydXaW5kb3dzIDgnLCAvKFdpbmRvd3MgTlQgNi4yKS9dLFxuICAgIFsnV2luZG93cyA4LjEnLCAvKFdpbmRvd3MgTlQgNi4zKS9dLFxuICAgIFsnV2luZG93cyAxMCcsIC8oV2luZG93cyBOVCAxMC4wKS9dLFxuICAgIFsnV2luZG93cyBNRScsIC9XaW5kb3dzIE1FL10sXG4gICAgWydXaW5kb3dzIENFJywgL1dpbmRvd3MgQ0V8V2luQ0V8TWljcm9zb2Z0IFBvY2tldCBJbnRlcm5ldCBFeHBsb3Jlci9dLFxuICAgIFsnT3BlbiBCU0QnLCAvT3BlbkJTRC9dLFxuICAgIFsnU3VuIE9TJywgL1N1bk9TL10sXG4gICAgWydDaHJvbWUgT1MnLCAvQ3JPUy9dLFxuICAgIFsnTGludXgnLCAvKExpbnV4KXwoWDExKS9dLFxuICAgIFsnTWFjIE9TJywgLyhNYWNfUG93ZXJQQyl8KE1hY2ludG9zaCkvXSxcbiAgICBbJ1FOWCcsIC9RTlgvXSxcbiAgICBbJ0JlT1MnLCAvQmVPUy9dLFxuICAgIFsnT1MvMicsIC9PU1xcLzIvXSxcbl07XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0KHVzZXJBZ2VudCkge1xuICAgIGlmICghIXVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQodXNlckFnZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFjdE5hdGl2ZUluZm8oKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE5vZGVWZXJzaW9uKCk7XG59XG5mdW5jdGlvbiBtYXRjaFVzZXJBZ2VudCh1YSkge1xuICAgIC8vIG9wdGVkIGZvciB1c2luZyByZWR1Y2UgaGVyZSByYXRoZXIgdGhhbiBBcnJheSNmaXJzdCB3aXRoIGEgcmVnZXgudGVzdCBjYWxsXG4gICAgLy8gdGhpcyBpcyBwcmltYXJpbHkgYmVjYXVzZSB1c2luZyB0aGUgcmVkdWNlIHdlIG9ubHkgcGVyZm9ybSB0aGUgcmVnZXhcbiAgICAvLyBleGVjdXRpb24gb25jZSByYXRoZXIgdGhhbiBvbmNlIGZvciB0aGUgdGVzdCBhbmQgZm9yIHRoZSBleGVjIGFnYWluIGJlbG93XG4gICAgLy8gcHJvYmFibHkgc29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgYmVuY2htYXJrZWQgdGhvdWdoXG4gICAgcmV0dXJuICh1YSAhPT0gJycgJiZcbiAgICAgICAgdXNlckFnZW50UnVsZXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVkLCBfYSkge1xuICAgICAgICAgICAgdmFyIGJyb3dzZXIgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdWFNYXRjaCA9IHJlZ2V4LmV4ZWModWEpO1xuICAgICAgICAgICAgcmV0dXJuICEhdWFNYXRjaCAmJiBbYnJvd3NlciwgdWFNYXRjaF07XG4gICAgICAgIH0sIGZhbHNlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYnJvd3Nlck5hbWUodWEpIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoVXNlckFnZW50KHVhKTtcbiAgICByZXR1cm4gZGF0YSA/IGRhdGFbMF0gOiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXNlckFnZW50KHVhKSB7XG4gICAgdmFyIG1hdGNoZWRSdWxlID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIGlmICghbWF0Y2hlZFJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBuYW1lID0gbWF0Y2hlZFJ1bGVbMF0sIG1hdGNoID0gbWF0Y2hlZFJ1bGVbMV07XG4gICAgaWYgKG5hbWUgPT09ICdzZWFyY2hib3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQm90SW5mbygpO1xuICAgIH1cbiAgICAvLyBEbyBub3QgdXNlIFJlZ0V4cCBmb3Igc3BsaXQgb3BlcmF0aW9uIGFzIHNvbWUgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBpdCAoU2VlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvY3Jvc3MtYnJvd3Nlci1zcGxpdClcbiAgICB2YXIgdmVyc2lvblBhcnRzID0gbWF0Y2hbMV0gJiYgbWF0Y2hbMV0uc3BsaXQoJy4nKS5qb2luKCdfJykuc3BsaXQoJ18nKS5zbGljZSgwLCAzKTtcbiAgICBpZiAodmVyc2lvblBhcnRzKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uUGFydHMubGVuZ3RoIDwgUkVRVUlSRURfVkVSU0lPTl9QQVJUUykge1xuICAgICAgICAgICAgdmVyc2lvblBhcnRzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB2ZXJzaW9uUGFydHMsIHRydWUpLCBjcmVhdGVWZXJzaW9uUGFydHMoUkVRVUlSRURfVkVSU0lPTl9QQVJUUyAtIHZlcnNpb25QYXJ0cy5sZW5ndGgpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmVyc2lvblBhcnRzID0gW107XG4gICAgfVxuICAgIHZhciB2ZXJzaW9uID0gdmVyc2lvblBhcnRzLmpvaW4oJy4nKTtcbiAgICB2YXIgb3MgPSBkZXRlY3RPUyh1YSk7XG4gICAgdmFyIHNlYXJjaEJvdE1hdGNoID0gU0VBUkNIQk9UX09TX1JFR0VYLmV4ZWModWEpO1xuICAgIGlmIChzZWFyY2hCb3RNYXRjaCAmJiBzZWFyY2hCb3RNYXRjaFsxXSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIHNlYXJjaEJvdE1hdGNoWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0T1ModWEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGNvdW50ID0gb3BlcmF0aW5nU3lzdGVtUnVsZXMubGVuZ3RoOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIHZhciBfYSA9IG9wZXJhdGluZ1N5c3RlbVJ1bGVzW2lpXSwgb3MgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVWZXJzaW9uKCkge1xuICAgIHZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9uO1xuICAgIHJldHVybiBpc05vZGUgPyBuZXcgTm9kZUluZm8ocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDEpKSA6IG51bGw7XG59XG5mdW5jdGlvbiBjcmVhdGVWZXJzaW9uUGFydHMoY291bnQpIHtcbiAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKCcwJyk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iXSwibmFtZXMiOlsiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwibCIsImFyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjb25jYXQiLCJCcm93c2VySW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIiwib3MiLCJ0eXBlIiwiTm9kZUluZm8iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTZWFyY2hCb3REZXZpY2VJbmZvIiwiYm90IiwiQm90SW5mbyIsIlJlYWN0TmF0aXZlSW5mbyIsIlNFQVJDSEJPWF9VQV9SRUdFWCIsIlNFQVJDSEJPVF9PU19SRUdFWCIsIlJFUVVJUkVEX1ZFUlNJT05fUEFSVFMiLCJ1c2VyQWdlbnRSdWxlcyIsIm9wZXJhdGluZ1N5c3RlbVJ1bGVzIiwiZGV0ZWN0IiwidXNlckFnZW50IiwicGFyc2VVc2VyQWdlbnQiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJnZXROb2RlVmVyc2lvbiIsIm1hdGNoVXNlckFnZW50IiwidWEiLCJyZWR1Y2UiLCJtYXRjaGVkIiwiX2EiLCJicm93c2VyIiwicmVnZXgiLCJ1YU1hdGNoIiwiZXhlYyIsImJyb3dzZXJOYW1lIiwiZGF0YSIsIm1hdGNoZWRSdWxlIiwibWF0Y2giLCJ2ZXJzaW9uUGFydHMiLCJzcGxpdCIsImpvaW4iLCJjcmVhdGVWZXJzaW9uUGFydHMiLCJkZXRlY3RPUyIsInNlYXJjaEJvdE1hdGNoIiwiaWkiLCJjb3VudCIsImlzTm9kZSIsIm91dHB1dCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-browser/es/index.js\n");

/***/ })

};
;