"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_hooks_1 = require("@testing-library/react-hooks");
var use_async_effect_1 = require("../src/use-async-effect");
var delay_1 = require("../utils/delay");
var AsyncEffectContext = react_1.default.createContext(1);
describe('use-async-effect', function () {
    test('work with async function', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _useAsyncEffect, AsyncEffectProvider, hook;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _useAsyncEffect = function () {
                        var value = react_1.useContext(AsyncEffectContext);
                        return {
                            value: value,
                        };
                    };
                    AsyncEffectProvider = function (_a) {
                        var children = _a.children;
                        var _b = react_1.useState(1), value = _b[0], setValue = _b[1];
                        use_async_effect_1.useAsyncEffect(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, delay_1.delay(1000)];
                                    case 1:
                                        _a.sent();
                                        setValue(2);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, []);
                        return react_1.default.createElement(AsyncEffectContext.Provider, { value: value }, children);
                    };
                    hook = react_hooks_1.renderHook(function () { return _useAsyncEffect(); }, { wrapper: AsyncEffectProvider });
                    return [4 /*yield*/, hook.waitForNextUpdate()];
                case 1:
                    _a.sent();
                    expect(hook.result.current.value).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test('clear function shoud work fine', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var reseted, _useAsyncEffect, unmount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    reseted = 0;
                    _useAsyncEffect = function () {
                        var _a = react_1.useState(), value = _a[0], setValue = _a[1];
                        use_async_effect_1.useAsyncEffect(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, function () {
                                        reseted += 1;
                                    }];
                            });
                        }); }, []);
                        return {
                            value: value,
                            setValue: setValue,
                        };
                    };
                    unmount = react_hooks_1.renderHook(function () { return _useAsyncEffect(); }).unmount;
                    return [4 /*yield*/, delay_1.delay(2000)];
                case 1:
                    _a.sent();
                    react_hooks_1.act(function () {
                        unmount();
                    });
                    expect(reseted).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); }, 5000);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L3VzZS1hc3luYy1lZmZlY3QudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW1EO0FBQ25ELDREQUE4RDtBQUM5RCw0REFBd0Q7QUFDeEQsd0NBQXNDO0FBRXRDLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVqRCxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDM0IsSUFBSSxDQUFDLDBCQUEwQixFQUFFOzs7OztvQkFDekIsZUFBZSxHQUFHO3dCQUN0QixJQUFNLEtBQUssR0FBRyxrQkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7d0JBQzVDLE9BQU87NEJBQ0wsS0FBSyxPQUFBO3lCQUNOLENBQUE7b0JBQ0gsQ0FBQyxDQUFBO29CQUNLLG1CQUFtQixHQUFHLFVBQUMsRUFBWTs0QkFBVixzQkFBUTt3QkFDL0IsSUFBQSx3QkFBK0IsRUFBOUIsYUFBSyxFQUFFLGdCQUF1QixDQUFBO3dCQUNyQyxpQ0FBYyxDQUFDOzs7NENBQ2IscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3Q0FBakIsU0FBaUIsQ0FBQTt3Q0FDakIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7OzZCQUNaLEVBQUUsRUFBRSxDQUFDLENBQUE7d0JBQ04sT0FBTyw4QkFBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssSUFBRyxRQUFRLENBQStCLENBQUE7b0JBQzVGLENBQUMsQ0FBQTtvQkFDSyxJQUFJLEdBQUcsd0JBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO29CQUNsRixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUE7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Ozs7U0FDMUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLGdDQUFnQyxFQUFFOzs7OztvQkFDakMsT0FBTyxHQUFHLENBQUMsQ0FBQTtvQkFDVCxlQUFlLEdBQUc7d0JBQ2hCLElBQUEsdUJBQThCLEVBQTdCLGFBQUssRUFBRSxnQkFBc0IsQ0FBQTt3QkFDcEMsaUNBQWMsQ0FBQzs7Z0NBQ2Isc0JBQU87d0NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQTtvQ0FDZCxDQUFDLEVBQUE7OzZCQUNGLEVBQUUsRUFBRSxDQUFDLENBQUE7d0JBQ04sT0FBTzs0QkFDTCxLQUFLLE9BQUE7NEJBQ0wsUUFBUSxVQUFBO3lCQUNULENBQUE7b0JBQ0gsQ0FBQyxDQUFBO29CQUNPLE9BQU8sR0FBSyx3QkFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxRQUF4QyxDQUF3QztvQkFDdkQscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBakIsU0FBaUIsQ0FBQTtvQkFDakIsaUJBQUcsQ0FBQzt3QkFDRixPQUFPLEVBQUUsQ0FBQTtvQkFDWCxDQUFDLENBQUMsQ0FBQTtvQkFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O1NBQ3hCLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvdXNlLWFzeW5jLWVmZmVjdC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlckhvb2ssIGFjdCB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QtaG9va3MnXG5pbXBvcnQgeyB1c2VBc3luY0VmZmVjdCB9IGZyb20gJy4uL3NyYy91c2UtYXN5bmMtZWZmZWN0J1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi91dGlscy9kZWxheSdcblxuY29uc3QgQXN5bmNFZmZlY3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgxKVxuXG5kZXNjcmliZSgndXNlLWFzeW5jLWVmZmVjdCcsICgpID0+IHtcbiAgdGVzdCgnd29yayB3aXRoIGFzeW5jIGZ1bmN0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IF91c2VBc3luY0VmZmVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdXNlQ29udGV4dChBc3luY0VmZmVjdENvbnRleHQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgQXN5bmNFZmZlY3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSlcbiAgICAgIHVzZUFzeW5jRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMClcbiAgICAgICAgc2V0VmFsdWUoMilcbiAgICAgIH0sIFtdKVxuICAgICAgcmV0dXJuIDxBc3luY0VmZmVjdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Bc3luY0VmZmVjdENvbnRleHQuUHJvdmlkZXI+XG4gICAgfVxuICAgIGNvbnN0IGhvb2sgPSByZW5kZXJIb29rKCgpID0+IF91c2VBc3luY0VmZmVjdCgpLCB7IHdyYXBwZXI6IEFzeW5jRWZmZWN0UHJvdmlkZXIgfSlcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC52YWx1ZSkudG9CZSgyKVxuICB9KVxuXG4gIHRlc3QoJ2NsZWFyIGZ1bmN0aW9uIHNob3VkIHdvcmsgZmluZScsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzZXRlZCA9IDBcbiAgICBjb25zdCBfdXNlQXN5bmNFZmZlY3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKClcbiAgICAgIHVzZUFzeW5jRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICByZXNldGVkICs9IDFcbiAgICAgICAgfVxuICAgICAgfSwgW10pXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgc2V0VmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgdW5tb3VudCB9ID0gcmVuZGVySG9vaygoKSA9PiBfdXNlQXN5bmNFZmZlY3QoKSlcbiAgICBhd2FpdCBkZWxheSgyMDAwKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB1bm1vdW50KClcbiAgICB9KVxuICAgIGV4cGVjdChyZXNldGVkKS50b0JlKDEpXG4gIH0sIDUwMDApXG59KVxuIl0sInZlcnNpb24iOjN9