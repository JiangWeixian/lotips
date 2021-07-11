"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var use_batch_1 = require("../src/use-batch");
var react_hooks_1 = require("@testing-library/react-hooks");
var delay_1 = require("../utils/delay");
var cnt = 0;
var api = function (_ids) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        cnt += 1;
        return [2 /*return*/, [1]];
    });
}); };
describe('use-batch', function () {
    test('combined into a batch request', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var hook1, hook2, hook3, hook4, hook5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hook1 = react_hooks_1.renderHook(function () { return use_batch_1.useBatch('use-batch', '1', api); });
                    hook2 = react_hooks_1.renderHook(function () { return use_batch_1.useBatch('use-batch', '1', api); });
                    hook3 = react_hooks_1.renderHook(function () { return use_batch_1.useBatch('use-batch', '1', api); });
                    hook4 = react_hooks_1.renderHook(function () { return use_batch_1.useBatch('use-batch', '1', api); });
                    hook5 = react_hooks_1.renderHook(function () { return use_batch_1.useBatch('use-batch', '1', api); });
                    return [4 /*yield*/, delay_1.delay(1000)];
                case 1:
                    _a.sent();
                    expect(cnt).toBe(1);
                    expect(hook1.result.current).toBe(1);
                    expect(hook2.result.current).toBe(1);
                    expect(hook3.result.current).toBe(1);
                    expect(hook4.result.current).toBe(1);
                    expect(hook5.result.current).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); }, 3000);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L3VzZS1iYXRjaC50ZXN0LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUEyQztBQUMzQyw0REFBeUQ7QUFDekQsd0NBQXNDO0FBRXRDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQTtBQUNYLElBQU0sR0FBRyxHQUFHLFVBQU8sSUFBYzs7UUFDL0IsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNSLHNCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUE7O0tBQ1gsQ0FBQTtBQUVELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDLCtCQUErQixFQUFFOzs7OztvQkFDOUIsS0FBSyxHQUFHLHdCQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFBO29CQUN6RCxLQUFLLEdBQUcsd0JBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUE7b0JBQ3pELEtBQUssR0FBRyx3QkFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQTtvQkFDekQsS0FBSyxHQUFHLHdCQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFBO29CQUN6RCxLQUFLLEdBQUcsd0JBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUE7b0JBQy9ELHFCQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQWpCLFNBQWlCLENBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O1NBQ3JDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvdXNlLWJhdGNoLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQmF0Y2ggfSBmcm9tICcuLi9zcmMvdXNlLWJhdGNoJ1xuaW1wb3J0IHsgcmVuZGVySG9vayB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QtaG9va3MnXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL3V0aWxzL2RlbGF5J1xuXG5sZXQgY250ID0gMFxuY29uc3QgYXBpID0gYXN5bmMgKF9pZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNudCArPSAxXG4gIHJldHVybiBbMV1cbn1cblxuZGVzY3JpYmUoJ3VzZS1iYXRjaCcsICgpID0+IHtcbiAgdGVzdCgnY29tYmluZWQgaW50byBhIGJhdGNoIHJlcXVlc3QnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaG9vazEgPSByZW5kZXJIb29rKCgpID0+IHVzZUJhdGNoKCd1c2UtYmF0Y2gnLCAnMScsIGFwaSkpXG4gICAgY29uc3QgaG9vazIgPSByZW5kZXJIb29rKCgpID0+IHVzZUJhdGNoKCd1c2UtYmF0Y2gnLCAnMScsIGFwaSkpXG4gICAgY29uc3QgaG9vazMgPSByZW5kZXJIb29rKCgpID0+IHVzZUJhdGNoKCd1c2UtYmF0Y2gnLCAnMScsIGFwaSkpXG4gICAgY29uc3QgaG9vazQgPSByZW5kZXJIb29rKCgpID0+IHVzZUJhdGNoKCd1c2UtYmF0Y2gnLCAnMScsIGFwaSkpXG4gICAgY29uc3QgaG9vazUgPSByZW5kZXJIb29rKCgpID0+IHVzZUJhdGNoKCd1c2UtYmF0Y2gnLCAnMScsIGFwaSkpXG4gICAgYXdhaXQgZGVsYXkoMTAwMClcbiAgICBleHBlY3QoY250KS50b0JlKDEpXG4gICAgZXhwZWN0KGhvb2sxLnJlc3VsdC5jdXJyZW50KS50b0JlKDEpXG4gICAgZXhwZWN0KGhvb2syLnJlc3VsdC5jdXJyZW50KS50b0JlKDEpXG4gICAgZXhwZWN0KGhvb2szLnJlc3VsdC5jdXJyZW50KS50b0JlKDEpXG4gICAgZXhwZWN0KGhvb2s0LnJlc3VsdC5jdXJyZW50KS50b0JlKDEpXG4gICAgZXhwZWN0KGhvb2s1LnJlc3VsdC5jdXJyZW50KS50b0JlKDEpXG4gIH0sIDMwMDApXG59KVxuIl0sInZlcnNpb24iOjN9