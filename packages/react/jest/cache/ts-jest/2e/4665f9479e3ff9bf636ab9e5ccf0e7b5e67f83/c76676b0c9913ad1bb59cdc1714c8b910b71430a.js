'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = tslib_1.__importStar(require('react'))
var react_hooks_1 = require('@testing-library/react-hooks')
var use_async_state_1 = require('../src/use-async-state')
var AsyncStateContext = react_1.default.createContext(1)
var AsyncStateProvider = function(_a) {
  var children = _a.children
  var _b = react_1.useState(1),
    value = _b[0],
    setValue = _b[1]
  react_1.useEffect(function() {
    setTimeout(function() {
      setValue(2)
    }, 1000)
  }, [])
  return react_1.default.createElement(AsyncStateContext.Provider, { value: value }, children)
}
var _useAsyncState = function(nullstate) {
  if (nullstate === void 0) {
    nullstate = undefined
  }
  var value = react_1.useContext(AsyncStateContext)
  var _a = use_async_state_1.useAsyncState(value, { nullstate: nullstate }),
    state = _a[0],
    set = _a[1]
  return {
    state: state,
    set: set,
  }
}
describe('use-async-state', function() {
  test('should be inited by async value', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hook = react_hooks_1.renderHook(
              function() {
                return _useAsyncState()
              },
              { wrapper: AsyncStateProvider },
            )
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(hook.result.current.state).toBe(2)
            return [2 /*return*/]
        }
      })
    })
  })
  test('initial async value should be rewrited by manual set', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hook = react_hooks_1.renderHook(
              function() {
                return _useAsyncState()
              },
              { wrapper: AsyncStateProvider },
            )
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(hook.result.current.state).toBe(2)
            react_hooks_1.act(function() {
              hook.result.current.set(3)
            })
            expect(hook.result.current.state).toBe(3)
            return [2 /*return*/]
        }
      })
    })
  })
  test('nullstate value availabled be configed', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hook = react_hooks_1.renderHook(
              function() {
                return _useAsyncState(0)
              },
              { wrapper: AsyncStateProvider },
            )
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(hook.result.current.state).toBe(2)
            react_hooks_1.act(function() {
              hook.result.current.set(0)
            })
            expect(hook.result.current.state).toBe(2)
            return [2 /*return*/]
        }
      })
    })
  })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L3VzZS1hc3luYy1zdGF0ZS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBOEQ7QUFDOUQsNERBQThEO0FBRTlELDBEQUFzRDtBQUV0RCxJQUFNLGlCQUFpQixHQUFHLGVBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFaEQsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEVBQVk7UUFBVixzQkFBUTtJQUM5QixJQUFBLHdCQUErQixFQUE5QixhQUFLLEVBQUUsZ0JBQXVCLENBQUE7SUFDckMsaUJBQVMsQ0FBQztRQUNSLFVBQVUsQ0FBQztZQUNULFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNOLE9BQU8sOEJBQUMsaUJBQWlCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLElBQUcsUUFBUSxDQUE4QixDQUFBO0FBQzFGLENBQUMsQ0FBQTtBQUVELElBQU0sY0FBYyxHQUFHLFVBQUMsU0FBcUI7SUFBckIsMEJBQUEsRUFBQSxxQkFBcUI7SUFDM0MsSUFBTSxLQUFLLEdBQUcsa0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3JDLElBQUEscUVBQWtELEVBQWpELGFBQUssRUFBRSxXQUEwQyxDQUFBO0lBQ3hELE9BQU87UUFDTCxLQUFLLE9BQUE7UUFDTCxHQUFHLEtBQUE7S0FDSixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQzFCLElBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7Ozs7b0JBQ2hDLElBQUksR0FBRyx3QkFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUE7b0JBQ2hGLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOztvQkFBOUIsU0FBOEIsQ0FBQTtvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTs7OztTQUMxQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsc0RBQXNELEVBQUU7Ozs7O29CQUNyRCxJQUFJLEdBQUcsd0JBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFFLEVBQWhCLENBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO29CQUNoRixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUE7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3pDLGlCQUFHLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixDQUFDLENBQUMsQ0FBQTtvQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O1NBQzFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyx3Q0FBd0MsRUFBRTs7Ozs7b0JBR3ZDLElBQUksR0FBRyx3QkFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO29CQUNqRixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUE7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3pDLGlCQUFHLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixDQUFDLENBQUMsQ0FBQTtvQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O1NBQzFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWFuZ3dlaS9wcm9qZWN0cy9sb3RpcHMvcGFja2FnZXMvcmVhY3QvdGVzdC91c2UtYXN5bmMtc3RhdGUudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlckhvb2ssIGFjdCB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QtaG9va3MnXG5cbmltcG9ydCB7IHVzZUFzeW5jU3RhdGUgfSBmcm9tICcuLi9zcmMvdXNlLWFzeW5jLXN0YXRlJ1xuXG5jb25zdCBBc3luY1N0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoMSlcblxuY29uc3QgQXN5bmNTdGF0ZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDEpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRWYWx1ZSgyKVxuICAgIH0sIDEwMDApXG4gIH0sIFtdKVxuICByZXR1cm4gPEFzeW5jU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQXN5bmNTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG59XG5cbmNvbnN0IF91c2VBc3luY1N0YXRlID0gKG51bGxzdGF0ZSA9IHVuZGVmaW5lZCkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHVzZUNvbnRleHQoQXN5bmNTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0XSA9IHVzZUFzeW5jU3RhdGUodmFsdWUsIHsgbnVsbHN0YXRlIH0pXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgc2V0LFxuICB9XG59XG5cbmRlc2NyaWJlKCd1c2UtYXN5bmMtc3RhdGUnLCAoKSA9PiB7XG4gIHRlc3QoJ3Nob3VsZCBiZSBpbml0ZWQgYnkgYXN5bmMgdmFsdWUnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT4gX3VzZUFzeW5jU3RhdGUoKSwgeyB3cmFwcGVyOiBBc3luY1N0YXRlUHJvdmlkZXIgfSlcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZSkudG9CZSgyKVxuICB9KVxuXG4gIHRlc3QoJ2luaXRpYWwgYXN5bmMgdmFsdWUgc2hvdWxkIGJlIHJld3JpdGVkIGJ5IG1hbnVhbCBzZXQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT4gX3VzZUFzeW5jU3RhdGUoKSwgeyB3cmFwcGVyOiBBc3luY1N0YXRlUHJvdmlkZXIgfSlcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZSkudG9CZSgyKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBob29rLnJlc3VsdC5jdXJyZW50LnNldCgzKVxuICAgIH0pXG4gICAgZXhwZWN0KGhvb2sucmVzdWx0LmN1cnJlbnQuc3RhdGUpLnRvQmUoMylcbiAgfSlcblxuICB0ZXN0KCdudWxsc3RhdGUgdmFsdWUgYXZhaWxhYmxlZCBiZSBjb25maWdlZCcsIGFzeW5jICgpID0+IHtcbiAgICAvLyBudWxsc3RhdGXlgLzkuI3lho3mmK91bmRlZmluZWQsIOiAjOaYrzBcbiAgICAvLyDkuIDml6ZudWxsc3RhdGXorr7nva7kuLowLCDlvZPpgJrov4dzZXTkuYvlkI7lsIbkvJrph43mlrDkvb/nlKhhc3luYyBzdGF0ZVxuICAgIGNvbnN0IGhvb2sgPSByZW5kZXJIb29rKCgpID0+IF91c2VBc3luY1N0YXRlKDApLCB7IHdyYXBwZXI6IEFzeW5jU3RhdGVQcm92aWRlciB9KVxuICAgIGF3YWl0IGhvb2sud2FpdEZvck5leHRVcGRhdGUoKVxuICAgIGV4cGVjdChob29rLnJlc3VsdC5jdXJyZW50LnN0YXRlKS50b0JlKDIpXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGhvb2sucmVzdWx0LmN1cnJlbnQuc2V0KDApXG4gICAgfSlcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZSkudG9CZSgyKVxuICB9KVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==
