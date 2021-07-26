import React, { useState, useMemo, useEffect, Children, isValidElement } from 'react';
import { isMobile } from '@lotips/core';

/**
 * WHY:
 * ```tsx
 * const [state, setState] = useState()
 * useEffect(() => {
 *  const fetch = async () => {
 *     const data = await api()
 *     setState(data)
 *  }
 * }, [])
 * NOTE:
 * - 但有时数据是来自redux的异步获取，在以下假设下该hook比较实用。没有相应的state action，或者不需要相应的state action
 * WARNING:
 * - 适合对同一个ID的对象进行修改。在`Form`中的涉及到重复的初始化的情况，不太合适`useAsyncState`
 * ```
 */
var useAsyncState = function (value, _a) {
    var _b = (_a === void 0 ? { nullstate: undefined } : _a).nullstate, nullstate = _b === void 0 ? undefined : _b;
    var _c = useState(nullstate), state = _c[0], set = _c[1];
    var get = useMemo(function () {
        return state === nullstate ? value : state;
    }, [value, state, nullstate]);
    return [get, set];
};

/**
 * refs: https://usehooks.com/useOnClickOutside/
 */
var EMPTY_ELEMENTS = [];
function useClickOutside(ref, _a) {
    var _b = _a.outsides, outsides = _b === void 0 ? EMPTY_ELEMENTS : _b, _c = _a.insides, insides = _c === void 0 ? EMPTY_ELEMENTS : _c, onClickInside = _a.onClickInside, onClickOutside = _a.onClickOutside;
    var isSwitchToTouchMode = isMobile();
    useEffect(function () {
        var listener = function (event) {
            var _a, _b, _c;
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || !event.target)
                return;
            if (event.target && outsides.includes(event.target)) {
                (_a = onClickOutside) === null || _a === void 0 ? void 0 : _a(event);
                return;
            }
            if (ref.current.contains(event.target) || insides.includes(event.target)) {
                (_b = onClickInside) === null || _b === void 0 ? void 0 : _b(event);
                return;
            }
            (_c = onClickOutside) === null || _c === void 0 ? void 0 : _c(event);
        };
        if (!isSwitchToTouchMode)
            document.addEventListener('mousedown', listener);
        else
            document.addEventListener('touchstart', listener);
        return function () {
            if (!isSwitchToTouchMode)
                document.removeEventListener('mousedown', listener);
            else
                document.removeEventListener('touchstart', listener);
        };
    }, 
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, onClickInside, onClickOutside, outsides, insides, isSwitchToTouchMode]);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

/**
 * WHY:
 * a debounced hooks
 * USAGE:
 * 正常使用setValue即可
 * NOTE:
 * （以修改filter为例）
 * - debouncedValue - 是最后生效的数据，用于filter数据请求
 * - value - 实际修改的数据，用于filter数据展示
 */
var useDebounce = function (_a) {
    var interval = _a.interval, props = __rest(_a, ["interval"]);
    var _b = useState(props.defaultValue), value = _b[0], setValue = _b[1];
    var _c = useState(props.defaultValue), debouncedValue = _c[0], setDebouncedValue = _c[1];
    useEffect(function () {
        var timer = setTimeout(function () {
            setDebouncedValue(value);
        }, interval);
        return function () {
            clearTimeout(timer);
        };
    }, [value, interval]);
    return {
        value: value,
        debouncedValue: debouncedValue,
        setValue: setValue,
    };
};

/**
 * @description:
 * 在一个列表中可能会出现某个字段为ID，但是我们需要的是这个ID的具体数据；在这个字段数据无法和列表同时populate的时候
 * 这个hook作用在于收集id，然后debounce请求一次并缓存，同时通知所有使用到这个hook的组件更新
 * NOTE:
 * 当然可以收集列表数据时候请求，该hook只是为了使用更方便。
 */
var buffer = {};
var running = {};
var interval = 10;
var listByIds = function (type, fetcher) { return __awaiter(void 0, void 0, void 0, function () {
    var keys, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keys = Object.keys(buffer[type]);
                if (keys.length === 0) {
                    running[type] = false;
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fetcher(keys)];
            case 1:
                data = _a.sent();
                keys.forEach(function (k, i) {
                    var callbacks = buffer[type][k];
                    delete buffer[type][k];
                    callbacks.forEach(function (callback) {
                        callback(data[i] || undefined);
                    });
                });
                setTimeout(function () { return listByIds(type, fetcher); }, interval);
                return [2 /*return*/];
        }
    });
}); };
var useBatch = function (type, id, api) {
    var _a = useState(), item = _a[0], setItem = _a[1];
    useEffect(function () {
        if (!id)
            return;
        new Promise(function (resolve) {
            buffer[type] = buffer[type] || {};
            buffer[type][id] = buffer[type][id] || [];
            buffer[type][id].push(resolve);
            if (!running[type]) {
                running[type] = true;
                setTimeout(function () { return listByIds(type, api); }, interval);
            }
        }).then(setItem);
    }, [type, id, api]);
    return item;
};

/**
 * WHY:
 * component ref只能用于一些已经挂载的元素。但是一般都是使用`useRef`存储，本身是一个无状态的行为。所以需要额外进行标识。
 */
var useMount = function () {
    var _a = useState(false), mounted = _a[0], setMounted = _a[1];
    useEffect(function () {
        setMounted(true);
    }, []);
    return mounted;
};

var useWindowResize = function () {
    var _a = useState(false), resizeing = _a[0], setResizing = _a[1];
    useEffect(function () {
        var listener = function () {
            setResizing(true);
        };
        window.addEventListener('resize', listener);
        return function () {
            window.removeEventListener('resize', listener);
        };
    }, []);
    return {
        resizeing: resizeing,
    };
};

/**
 * WHY:
 * react children contain target or not
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
var hasComponentOfA = function (children, target) {
    return Children.toArray(children).some(function (child) {
        if (isValidElement(child))
            return child.type === target;
        return false;
    });
};

/**
 * WHY:
 * get all component a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
var getComponentsNotOfA = function (children, target) {
    return React.Children.map(children, function (child) {
        return !hasComponentOfA(child, target) ? child : null;
    });
};

/**
 * WHY:
 * get all component exclude a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
var getComponentsOfA = function (children, target) {
    return React.Children.map(children, function (child) {
        return hasComponentOfA(child, target) ? child : null;
    });
};

// hooks

export { getComponentsNotOfA, getComponentsOfA, hasComponentOfA, useAsyncState, useBatch, useClickOutside, useDebounce, useMount, useWindowResize };
