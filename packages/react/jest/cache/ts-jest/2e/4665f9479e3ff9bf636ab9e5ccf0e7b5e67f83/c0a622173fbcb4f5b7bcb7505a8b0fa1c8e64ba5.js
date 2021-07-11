"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_hooks_1 = require("@testing-library/react-hooks");
var use_debounce_1 = require("../src/use-debounce");
var delay_1 = require("../utils/delay");
describe('use-debounce', function () {
    test('default value should work', function () {
        var result = react_hooks_1.renderHook(function () { return use_debounce_1.useDebounce({ defaultValue: 1 }); }).result;
        expect(result.current.value).toBe(1);
        expect(result.current.debouncedValue).toBe(1);
    });
    test('value should be react, debounced value should be debounced', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a, result, waitForNextUpdate;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = react_hooks_1.renderHook(function () { return use_debounce_1.useDebounce({ interval: 2000 }); }), result = _a.result, waitForNextUpdate = _a.waitForNextUpdate;
                    react_hooks_1.act(function () {
                        Array(10)
                            .fill(0)
                            .forEach(function (v) {
                            result.current.setValue(2);
                        });
                    });
                    return [4 /*yield*/, delay_1.delay(1000)];
                case 1:
                    _b.sent();
                    expect(result.current.debouncedValue).toBe(undefined);
                    return [4 /*yield*/, delay_1.delay(2000)];
                case 2:
                    _b.sent();
                    expect(result.current.value).toBe(2);
                    expect(result.current.debouncedValue).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); }, 5000);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L3VzZS1kZWJvdW5jZS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBOEQ7QUFDOUQsb0RBQWlEO0FBQ2pELHdDQUFzQztBQUV0QyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3ZCLElBQUksQ0FBQywyQkFBMkIsRUFBRTtRQUN4QixJQUFBLGlIQUFNLENBQXVEO1FBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsNERBQTRELEVBQUU7Ozs7O29CQUMzRCxLQUFnQyx3QkFBVSxDQUFDLGNBQU0sT0FBQSwwQkFBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFBL0UsTUFBTSxZQUFBLEVBQUUsaUJBQWlCLHVCQUFBLENBQXNEO29CQUN2RixpQkFBRyxDQUFDO3dCQUNGLEtBQUssQ0FBQyxFQUFFLENBQUM7NkJBQ04sSUFBSSxDQUFDLENBQUMsQ0FBQzs2QkFDUCxPQUFPLENBQUMsVUFBQSxDQUFDOzRCQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUM1QixDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsQ0FBQTtvQkFDRixxQkFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUFqQixTQUFpQixDQUFBO29CQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3JELHFCQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQWpCLFNBQWlCLENBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O1NBQzlDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvdXNlLWRlYm91bmNlLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckhvb2ssIGFjdCB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QtaG9va3MnXG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJy4uL3NyYy91c2UtZGVib3VuY2UnXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL3V0aWxzL2RlbGF5J1xuXG5kZXNjcmliZSgndXNlLWRlYm91bmNlJywgKCkgPT4ge1xuICB0ZXN0KCdkZWZhdWx0IHZhbHVlIHNob3VsZCB3b3JrJywgKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSByZW5kZXJIb29rKCgpID0+IHVzZURlYm91bmNlKHsgZGVmYXVsdFZhbHVlOiAxIH0pKVxuICAgIGV4cGVjdChyZXN1bHQuY3VycmVudC52YWx1ZSkudG9CZSgxKVxuICAgIGV4cGVjdChyZXN1bHQuY3VycmVudC5kZWJvdW5jZWRWYWx1ZSkudG9CZSgxKVxuICB9KVxuXG4gIHRlc3QoJ3ZhbHVlIHNob3VsZCBiZSByZWFjdCwgZGVib3VuY2VkIHZhbHVlIHNob3VsZCBiZSBkZWJvdW5jZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHQsIHdhaXRGb3JOZXh0VXBkYXRlIH0gPSByZW5kZXJIb29rKCgpID0+IHVzZURlYm91bmNlKHsgaW50ZXJ2YWw6IDIwMDAgfSkpXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIEFycmF5KDEwKVxuICAgICAgICAuZmlsbCgwKVxuICAgICAgICAuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICByZXN1bHQuY3VycmVudC5zZXRWYWx1ZSgyKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgYXdhaXQgZGVsYXkoMTAwMClcbiAgICBleHBlY3QocmVzdWx0LmN1cnJlbnQuZGVib3VuY2VkVmFsdWUpLnRvQmUodW5kZWZpbmVkKVxuICAgIGF3YWl0IGRlbGF5KDIwMDApXG4gICAgZXhwZWN0KHJlc3VsdC5jdXJyZW50LnZhbHVlKS50b0JlKDIpXG4gICAgZXhwZWN0KHJlc3VsdC5jdXJyZW50LmRlYm91bmNlZFZhbHVlKS50b0JlKDIpXG4gIH0sIDUwMDApXG59KVxuIl0sInZlcnNpb24iOjN9