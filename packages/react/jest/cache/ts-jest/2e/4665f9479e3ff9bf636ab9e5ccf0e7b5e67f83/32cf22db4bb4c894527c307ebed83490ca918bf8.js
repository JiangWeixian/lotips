'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var use_page_1 = require('../src/use-page')
var react_hooks_1 = require('@testing-library/react-hooks')
describe('use-page', function() {
  test('default state should work fine', function() {
    var hook = react_hooks_1.renderHook(function() {
      return use_page_1.usePage({
        api: function(params) {
          return tslib_1.__awaiter(void 0, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2 /*return*/, { data: [1], total: 3 }]
            })
          })
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      })
    })
    expect(hook.result.current.state).toMatchObject({
      data: [],
      selected: [],
      ids: [],
      pages: 0,
      limit: 10,
      total: 0,
      current: 1,
      dataKey: 'id',
      entries: {},
      filter: { text: '' },
    })
  })
  test('reinit should work fine', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hook = react_hooks_1.renderHook(function() {
              return use_page_1.usePage({
                api: function(params) {
                  return tslib_1.__awaiter(void 0, void 0, void 0, function() {
                    return tslib_1.__generator(this, function(_a) {
                      return [2 /*return*/, { data: [{ id: 1 }], total: 100 }]
                    })
                  })
                },
                defaultFilter: { text: '' },
                limit: 10,
                dataKey: 'id',
              })
            })
            hook.result.current.dispatch.handleReinit()
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(hook.result.current.state.data).toMatchObject([{ id: 1 }])
            expect(hook.result.current.state.pages).toBe(10)
            return [2 /*return*/]
        }
      })
    })
  })
  test('set filter should work in debounce mode', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var cnt, hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            cnt = 0
            hook = react_hooks_1.renderHook(function() {
              return use_page_1.usePage({
                api: function(params) {
                  return tslib_1.__awaiter(void 0, void 0, void 0, function() {
                    return tslib_1.__generator(this, function(_a) {
                      cnt += 1
                      return [2 /*return*/, { data: [{ id: 1 }], total: 100 }]
                    })
                  })
                },
                defaultFilter: { text: '' },
                limit: 10,
                dataKey: 'id',
              })
            })
            Array(10)
              .fill(0)
              .forEach(function(v) {
                hook.result.current.dispatch.handleClearFilter()
              })
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(cnt).toBe(1)
            return [2 /*return*/]
        }
      })
    })
  })
  test('filter clear & set should work fine', function() {
    var hook = react_hooks_1.renderHook(function() {
      return use_page_1.usePage({
        api: function(params) {
          return tslib_1.__awaiter(void 0, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2 /*return*/, { data: [{ id: 1 }], total: 100 }]
            })
          })
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      })
    })
    hook.result.current.dispatch.handleClearFilter()
    expect(hook.result.current.state.filter).toBe(undefined)
    hook.result.current.dispatch.handleSetFilter({ text: '1' })
    expect(hook.result.current.state.filter).toMatchObject({ text: '1' })
    hook.result.current.dispatch.handleSetFilterByField('text', '2')
    expect(hook.result.current.state.filter).toMatchObject({ text: '2' })
  })
  test('next, prev, go should change current correct', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var cnt, list, hook
      return tslib_1.__generator(this, function(_a) {
        cnt = 0
        list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
        hook = react_hooks_1.renderHook(function() {
          return use_page_1.usePage({
            api: function(params) {
              return tslib_1.__awaiter(void 0, void 0, void 0, function() {
                return tslib_1.__generator(this, function(_a) {
                  cnt += 1
                  return [2 /*return*/, { data: [list[cnt]], total: 100 }]
                })
              })
            },
            defaultFilter: { text: '' },
            limit: 10,
            dataKey: 'id',
          })
        })
        hook.result.current.dispatch.handleGo(1)
        expect(hook.result.current.state.current).toBe(1)
        hook.result.current.dispatch.handlePrev()
        expect(hook.result.current.state.current).toBe(0)
        hook.result.current.dispatch.handleNext(1)
        expect(hook.result.current.state.current).toBe(1)
        expect(cnt).toBe(3)
        return [2 /*return*/]
      })
    })
  })
  test('next, prev, go should change current correct', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var cnt, list, hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            cnt = 0
            list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
            hook = react_hooks_1.renderHook(function() {
              return use_page_1.usePage({
                api: function(params) {
                  return tslib_1.__awaiter(void 0, void 0, void 0, function() {
                    return tslib_1.__generator(this, function(_a) {
                      cnt += 1
                      return [2 /*return*/, { data: [list[cnt]], total: 100 }]
                    })
                  })
                },
                defaultFilter: { text: '' },
                limit: 10,
                dataKey: 'id',
              })
            })
            hook.result.current.dispatch.handleGo(1)
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            hook.result.current.dispatch.handlePrev()
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 2:
            _a.sent()
            hook.result.current.dispatch.handleNext(1)
            expect(cnt).toBe(3)
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 3:
            _a.sent()
            expect(hook.result.current.state.data).toMatchObject([{ id: 1 }, { id: 2 }, { id: 3 }])
            return [2 /*return*/]
        }
      })
    })
  })
  test('status should change correct', function() {
    return tslib_1.__awaiter(void 0, void 0, void 0, function() {
      var hook
      return tslib_1.__generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            hook = react_hooks_1.renderHook(function() {
              return use_page_1.usePage({
                api: function(params) {
                  return tslib_1.__awaiter(void 0, void 0, void 0, function() {
                    return tslib_1.__generator(this, function(_a) {
                      return [2 /*return*/, { data: [{ id: 0 }], total: 100 }]
                    })
                  })
                },
                defaultFilter: { text: '' },
                limit: 10,
                dataKey: 'id',
              })
            })
            hook.result.current.dispatch.handleGo(1)
            expect(hook.result.current.state.status).toBe('loading')
            return [4 /*yield*/, hook.waitForNextUpdate()]
          case 1:
            _a.sent()
            expect(hook.result.current.state.status).toBe('loaded')
            return [2 /*return*/]
        }
      })
    })
  })
  test('set selected should work fine', function() {
    var hook = react_hooks_1.renderHook(function() {
      return use_page_1.usePage({
        api: function(params) {
          return tslib_1.__awaiter(void 0, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2 /*return*/, { data: [{ id: '1' }], total: 100 }]
            })
          })
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      })
    })
    expect(hook.result.current.state.selected).toMatchObject([])
    hook.result.current.dispatch.setSelect(['1'])
    expect(hook.result.current.state.selected).toMatchObject(['1'])
  })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L3VzZS1wYWdlLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQXlDO0FBQ3pDLDREQUE4RDtBQUU5RCxRQUFRLENBQUMsVUFBVSxFQUFFO0lBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNyQyxJQUFNLElBQUksR0FBRyx3QkFBVSxDQUFDO1lBQ3RCLE9BQUEsa0JBQU8sQ0FBQztnQkFDTixHQUFHLEVBQUUsVUFBTyxNQUFpRTs7d0JBQzNFLHNCQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFBOztxQkFDL0I7Z0JBQ0QsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1FBUEYsQ0FPRSxDQUNILENBQUE7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzlDLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMseUJBQXlCLEVBQUU7Ozs7O29CQUN4QixJQUFJLEdBQUcsd0JBQVUsQ0FBQzt3QkFDdEIsT0FBQSxrQkFBTyxDQUFDOzRCQUNOLEdBQUcsRUFBRSxVQUFPLE1BQWlFOztvQ0FDM0Usc0JBQU8s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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvdXNlLXBhZ2UudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnLi4vc3JjL3VzZS1wYWdlJ1xuaW1wb3J0IHsgcmVuZGVySG9vaywgYWN0IH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9yZWFjdC1ob29rcydcblxuZGVzY3JpYmUoJ3VzZS1wYWdlJywgKCkgPT4ge1xuICB0ZXN0KCdkZWZhdWx0IHN0YXRlIHNob3VsZCB3b3JrIGZpbmUnLCAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT5cbiAgICAgIHVzZVBhZ2Uoe1xuICAgICAgICBhcGk6IGFzeW5jIChwYXJhbXM6IHsgc2tpcDogbnVtYmVyOyBsaW1pdDogbnVtYmVyOyBmaWx0ZXI6IHsgdGV4dDogc3RyaW5nIH0gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFsxXSwgdG90YWw6IDMgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0RmlsdGVyOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgZGF0YUtleTogJ2lkJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgIGlkczogW10sXG4gICAgICBwYWdlczogMCxcbiAgICAgIGxpbWl0OiAxMCxcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgY3VycmVudDogMSxcbiAgICAgIGRhdGFLZXk6ICdpZCcsXG4gICAgICBlbnRyaWVzOiB7fSxcbiAgICAgIGZpbHRlcjogeyB0ZXh0OiAnJyB9LFxuICAgIH0pXG4gIH0pXG5cbiAgdGVzdCgncmVpbml0IHNob3VsZCB3b3JrIGZpbmUnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT5cbiAgICAgIHVzZVBhZ2Uoe1xuICAgICAgICBhcGk6IGFzeW5jIChwYXJhbXM6IHsgc2tpcDogbnVtYmVyOyBsaW1pdDogbnVtYmVyOyBmaWx0ZXI6IHsgdGV4dDogc3RyaW5nIH0gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFt7IGlkOiAxIH1dLCB0b3RhbDogMTAwIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEZpbHRlcjogeyB0ZXh0OiAnJyB9LFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGRhdGFLZXk6ICdpZCcsXG4gICAgICB9KSxcbiAgICApXG5cbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZVJlaW5pdCgpXG4gICAgYXdhaXQgaG9vay53YWl0Rm9yTmV4dFVwZGF0ZSgpXG4gICAgZXhwZWN0KGhvb2sucmVzdWx0LmN1cnJlbnQuc3RhdGUuZGF0YSkudG9NYXRjaE9iamVjdChbeyBpZDogMSB9XSlcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5wYWdlcykudG9CZSgxMClcbiAgfSlcblxuICB0ZXN0KCdzZXQgZmlsdGVyIHNob3VsZCB3b3JrIGluIGRlYm91bmNlIG1vZGUnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNudCA9IDBcbiAgICBjb25zdCBob29rID0gcmVuZGVySG9vaygoKSA9PlxuICAgICAgdXNlUGFnZSh7XG4gICAgICAgIGFwaTogYXN5bmMgKHBhcmFtczogeyBza2lwOiBudW1iZXI7IGxpbWl0OiBudW1iZXI7IGZpbHRlcjogeyB0ZXh0OiBzdHJpbmcgfSB9KSA9PiB7XG4gICAgICAgICAgY250ICs9IDFcbiAgICAgICAgICByZXR1cm4geyBkYXRhOiBbeyBpZDogMSB9XSwgdG90YWw6IDEwMCB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRGaWx0ZXI6IHsgdGV4dDogJycgfSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBkYXRhS2V5OiAnaWQnLFxuICAgICAgfSksXG4gICAgKVxuXG4gICAgQXJyYXkoMTApXG4gICAgICAuZmlsbCgwKVxuICAgICAgLmZvckVhY2godiA9PiB7XG4gICAgICAgIGhvb2sucmVzdWx0LmN1cnJlbnQuZGlzcGF0Y2guaGFuZGxlQ2xlYXJGaWx0ZXIoKVxuICAgICAgfSlcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBleHBlY3QoY250KS50b0JlKDEpXG4gIH0pXG5cbiAgdGVzdCgnZmlsdGVyIGNsZWFyICYgc2V0IHNob3VsZCB3b3JrIGZpbmUnLCAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT5cbiAgICAgIHVzZVBhZ2Uoe1xuICAgICAgICBhcGk6IGFzeW5jIChwYXJhbXM6IHsgc2tpcDogbnVtYmVyOyBsaW1pdDogbnVtYmVyOyBmaWx0ZXI6IHsgdGV4dDogc3RyaW5nIH0gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFt7IGlkOiAxIH1dLCB0b3RhbDogMTAwIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEZpbHRlcjogeyB0ZXh0OiAnJyB9LFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGRhdGFLZXk6ICdpZCcsXG4gICAgICB9KSxcbiAgICApXG4gICAgaG9vay5yZXN1bHQuY3VycmVudC5kaXNwYXRjaC5oYW5kbGVDbGVhckZpbHRlcigpXG4gICAgZXhwZWN0KGhvb2sucmVzdWx0LmN1cnJlbnQuc3RhdGUuZmlsdGVyKS50b0JlKHVuZGVmaW5lZClcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZVNldEZpbHRlcih7IHRleHQ6ICcxJyB9KVxuICAgIGV4cGVjdChob29rLnJlc3VsdC5jdXJyZW50LnN0YXRlLmZpbHRlcikudG9NYXRjaE9iamVjdCh7IHRleHQ6ICcxJyB9KVxuICAgIGhvb2sucmVzdWx0LmN1cnJlbnQuZGlzcGF0Y2guaGFuZGxlU2V0RmlsdGVyQnlGaWVsZCgndGV4dCcsICcyJylcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5maWx0ZXIpLnRvTWF0Y2hPYmplY3QoeyB0ZXh0OiAnMicgfSlcbiAgfSlcblxuICB0ZXN0KCduZXh0LCBwcmV2LCBnbyBzaG91bGQgY2hhbmdlIGN1cnJlbnQgY29ycmVjdCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY250ID0gMFxuICAgIGNvbnN0IGxpc3QgPSBbeyBpZDogMCB9LCB7IGlkOiAxIH0sIHsgaWQ6IDIgfSwgeyBpZDogMyB9XVxuICAgIGNvbnN0IGhvb2sgPSByZW5kZXJIb29rKCgpID0+XG4gICAgICB1c2VQYWdlKHtcbiAgICAgICAgYXBpOiBhc3luYyAocGFyYW1zOiB7IHNraXA6IG51bWJlcjsgbGltaXQ6IG51bWJlcjsgZmlsdGVyOiB7IHRleHQ6IHN0cmluZyB9IH0pID0+IHtcbiAgICAgICAgICBjbnQgKz0gMVxuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtsaXN0W2NudF1dLCB0b3RhbDogMTAwIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEZpbHRlcjogeyB0ZXh0OiAnJyB9LFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGRhdGFLZXk6ICdpZCcsXG4gICAgICB9KSxcbiAgICApXG4gICAgaG9vay5yZXN1bHQuY3VycmVudC5kaXNwYXRjaC5oYW5kbGVHbygxKVxuICAgIGV4cGVjdChob29rLnJlc3VsdC5jdXJyZW50LnN0YXRlLmN1cnJlbnQpLnRvQmUoMSlcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZVByZXYoKVxuICAgIGV4cGVjdChob29rLnJlc3VsdC5jdXJyZW50LnN0YXRlLmN1cnJlbnQpLnRvQmUoMClcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZU5leHQoMSlcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5jdXJyZW50KS50b0JlKDEpXG4gICAgZXhwZWN0KGNudCkudG9CZSgzKVxuICB9KVxuXG4gIHRlc3QoJ25leHQsIHByZXYsIGdvIHNob3VsZCBjaGFuZ2UgY3VycmVudCBjb3JyZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbnQgPSAwXG4gICAgY29uc3QgbGlzdCA9IFt7IGlkOiAwIH0sIHsgaWQ6IDEgfSwgeyBpZDogMiB9LCB7IGlkOiAzIH1dXG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT5cbiAgICAgIHVzZVBhZ2Uoe1xuICAgICAgICBhcGk6IGFzeW5jIChwYXJhbXM6IHsgc2tpcDogbnVtYmVyOyBsaW1pdDogbnVtYmVyOyBmaWx0ZXI6IHsgdGV4dDogc3RyaW5nIH0gfSkgPT4ge1xuICAgICAgICAgIGNudCArPSAxXG4gICAgICAgICAgcmV0dXJuIHsgZGF0YTogW2xpc3RbY250XV0sIHRvdGFsOiAxMDAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0RmlsdGVyOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgZGF0YUtleTogJ2lkJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZUdvKDEpXG4gICAgYXdhaXQgaG9vay53YWl0Rm9yTmV4dFVwZGF0ZSgpXG4gICAgaG9vay5yZXN1bHQuY3VycmVudC5kaXNwYXRjaC5oYW5kbGVQcmV2KClcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZU5leHQoMSlcbiAgICBleHBlY3QoY250KS50b0JlKDMpXG4gICAgYXdhaXQgaG9vay53YWl0Rm9yTmV4dFVwZGF0ZSgpXG4gICAgZXhwZWN0KGhvb2sucmVzdWx0LmN1cnJlbnQuc3RhdGUuZGF0YSkudG9NYXRjaE9iamVjdChbeyBpZDogMSB9LCB7IGlkOiAyIH0sIHsgaWQ6IDMgfV0pXG4gIH0pXG5cbiAgdGVzdCgnc3RhdHVzIHNob3VsZCBjaGFuZ2UgY29ycmVjdCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBob29rID0gcmVuZGVySG9vaygoKSA9PlxuICAgICAgdXNlUGFnZSh7XG4gICAgICAgIGFwaTogYXN5bmMgKHBhcmFtczogeyBza2lwOiBudW1iZXI7IGxpbWl0OiBudW1iZXI7IGZpbHRlcjogeyB0ZXh0OiBzdHJpbmcgfSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgZGF0YTogW3sgaWQ6IDAgfV0sIHRvdGFsOiAxMDAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0RmlsdGVyOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgZGF0YUtleTogJ2lkJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLmhhbmRsZUdvKDEpXG4gICAgZXhwZWN0KGhvb2sucmVzdWx0LmN1cnJlbnQuc3RhdGUuc3RhdHVzKS50b0JlKCdsb2FkaW5nJylcbiAgICBhd2FpdCBob29rLndhaXRGb3JOZXh0VXBkYXRlKClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5zdGF0dXMpLnRvQmUoJ2xvYWRlZCcpXG4gIH0pXG5cbiAgdGVzdCgnc2V0IHNlbGVjdGVkIHNob3VsZCB3b3JrIGZpbmUnLCAoKSA9PiB7XG4gICAgY29uc3QgaG9vayA9IHJlbmRlckhvb2soKCkgPT5cbiAgICAgIHVzZVBhZ2Uoe1xuICAgICAgICBhcGk6IGFzeW5jIChwYXJhbXM6IHsgc2tpcDogbnVtYmVyOyBsaW1pdDogbnVtYmVyOyBmaWx0ZXI6IHsgdGV4dDogc3RyaW5nIH0gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFt7IGlkOiAnMScgfV0sIHRvdGFsOiAxMDAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0RmlsdGVyOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgZGF0YUtleTogJ2lkJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5zZWxlY3RlZCkudG9NYXRjaE9iamVjdChbXSlcbiAgICBob29rLnJlc3VsdC5jdXJyZW50LmRpc3BhdGNoLnNldFNlbGVjdChbJzEnXSlcbiAgICBleHBlY3QoaG9vay5yZXN1bHQuY3VycmVudC5zdGF0ZS5zZWxlY3RlZCkudG9NYXRjaE9iamVjdChbJzEnXSlcbiAgfSlcbn0pXG4iXSwidmVyc2lvbiI6M30=
