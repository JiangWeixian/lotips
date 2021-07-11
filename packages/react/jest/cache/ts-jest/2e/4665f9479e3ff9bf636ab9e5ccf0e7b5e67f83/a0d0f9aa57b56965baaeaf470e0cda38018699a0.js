'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = require('react')
var use_rematch_reducer_1 = require('use-rematch-reducer')
var lodash_debounce_1 = tslib_1.__importDefault(require('lodash.debounce'))
var lodash_uniqby_1 = tslib_1.__importDefault(require('lodash.uniqby'))
var lodash_keyby_1 = tslib_1.__importDefault(require('lodash.keyby'))
var lodash_xor_1 = tslib_1.__importDefault(require('lodash.xor'))
var defaultState2Query = function(state) {
  return { skip: (state.current - 1) * state.limit, limit: state.limit, filter: state.filter }
}
exports.usePage = function(_a) {
  var _b = _a.limit,
    limit = _b === void 0 ? 10 : _b,
    _c = _a.defaultFilter,
    defaultFilter = _c === void 0 ? undefined : _c,
    _d = _a.state2Query,
    state2Query = _d === void 0 ? defaultState2Query : _d,
    _e = _a.dataKey,
    dataKey = _e === void 0 ? 'id' : _e,
    props = tslib_1.__rest(_a, ['limit', 'defaultFilter', 'state2Query', 'dataKey'])
  var _f = use_rematch_reducer_1.useRematchReducer({
      name: 'use-page',
      state: {
        data: [],
        selected: [],
        ids: [],
        pages: 0,
        limit: limit,
        total: 0,
        current: 1,
        dataKey: dataKey,
        entries: {},
        filter: defaultFilter,
      },
      reducers: {
        setData: function(state, payload) {
          var _a, _b
          return tslib_1.__assign(tslib_1.__assign({}, state), {
            total: ((_a = payload.total), _a !== null && _a !== void 0 ? _a : 0),
            ids: payload.data.map(function(v) {
              return v[dataKey]
            }),
            entries: lodash_keyby_1.default(payload.data, dataKey),
            pages: ((_b = payload.total), _b !== null && _b !== void 0 ? _b : 0) / state.limit,
            data: payload.data,
          })
        },
        setSelect: function(state, payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), { selected: payload })
        },
        toggleSelect: function(state, payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), {
            selected: lodash_xor_1.default(state.selected, payload),
          })
        },
        setStatus: function(state, payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), { status: payload })
        },
        setCurrent: function(state, payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), { current: payload })
        },
        setFilter: function(state, payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), { filter: payload })
        },
        clearFilter: function(state, _payload) {
          return tslib_1.__assign(tslib_1.__assign({}, state), { filter: undefined })
        },
      },
      effects: {
        handleGo: function(payload, _state, state) {
          var _a, _b
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var _c, data, total, e_1
            return tslib_1.__generator(this, function(_d) {
              switch (_d.label) {
                case 0:
                  this.setStatus('loading')
                  this.setCurrent(payload)
                  _d.label = 1
                case 1:
                  _d.trys.push([1, 3, , 4])
                  return [
                    4 /*yield*/,
                    (_b = (_a = props).api) === null || _b === void 0
                      ? void 0
                      : _b.call(_a, state2Query(state)),
                  ]
                case 2:
                  ;(_c = _d.sent()), (data = _c.data), (total = _c.total)
                  this.setStatus('loaded')
                  this.setData({
                    data: lodash_uniqby_1.default(state.data.concat(data), dataKey),
                    total: total,
                  })
                  return [3 /*break*/, 4]
                case 3:
                  e_1 = _d.sent()
                  this.setStatus('error')
                  return [3 /*break*/, 4]
                case 4:
                  return [2 /*return*/]
              }
            })
          })
        },
        handleNext: function(_payload, _state, state) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              this.handleGo(state.current + 1)
              return [2 /*return*/]
            })
          })
        },
        handlePrev: function(_payload, _state, state) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              this.handleGo(state.current - 1)
              return [2 /*return*/]
            })
          })
        },
        handleReinit: function(_payload, _state) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              this.handleGo(1)
              return [2 /*return*/]
            })
          })
        },
        handleRefresh: function(_payload, _state, state) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              this.handleGo(state.current)
              return [2 /*return*/]
            })
          })
        },
      },
    }),
    state = _f[0],
    dispatch = _f[1]
  var refresh = react_1.useRef(lodash_debounce_1.default(dispatch.handleRefresh, 300))
  var handleSetFilter = react_1.useCallback(
    function(filter) {
      var next = tslib_1.__assign(tslib_1.__assign({}, state.filter), filter)
      dispatch.setFilter(next)
      refresh.current()
    },
    [dispatch.setFilter, state.filter, refresh],
  )
  var handleSetFilterByField = react_1.useCallback(
    function(filed, value) {
      var _a
      var next = tslib_1.__assign(
        tslib_1.__assign({}, state.filter),
        ((_a = {}), (_a[filed] = value), _a),
      )
      dispatch.setFilter(next)
      refresh.current()
    },
    [dispatch.setFilter, state.filter, dispatch.handleRefresh],
  )
  var handleResetFilter = react_1.useCallback(
    function() {
      dispatch.setFilter(defaultFilter)
      refresh.current()
    },
    [dispatch.setFilter, defaultFilter, dispatch.handleRefresh],
  )
  var handleClearFilter = react_1.useCallback(
    function() {
      dispatch.clearFilter()
      refresh.current()
    },
    [dispatch.setFilter, dispatch.handleRefresh],
  )
  return {
    state: state,
    dispatch: tslib_1.__assign(tslib_1.__assign({}, dispatch), {
      handleSetFilter: handleSetFilter,
      handleResetFilter: handleResetFilter,
      handleClearFilter: handleClearFilter,
      handleSetFilterByField: handleSetFilterByField,
    }),
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLXBhZ2UudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTJDO0FBQzNDLDJEQUF1RDtBQUN2RCw0RUFBc0M7QUFDdEMsd0VBQWtDO0FBQ2xDLHNFQUFnQztBQUNoQyxrRUFBNEI7QUFFNUIsSUFBTSxrQkFBa0IsR0FBRyxVQUFPLEtBQWtCO0lBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUM5RixDQUFDLENBQUE7QUE2QlksUUFBQSxPQUFPLEdBQUcsVUFBTyxFQU1UO0lBTG5CLElBQUEsYUFBVSxFQUFWLCtCQUFVLEVBQ1YscUJBQXlCLEVBQXpCLDhDQUF5QixFQUN6QixtQkFBZ0MsRUFBaEMscURBQWdDLEVBQ2hDLGVBQWMsRUFBZCxtQ0FBYyxFQUNkLGdGQUFRO0lBRUYsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BdUZKLEVBdkZLLGFBQUssRUFBRSxnQkF1RlosQ0FBQTtJQUNGLElBQU0sT0FBTyxHQUFHLGNBQU0sQ0FBQyx5QkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3RCxJQUFNLGVBQWUsR0FBRyxtQkFBVyxDQUNqQyxVQUFDLE1BQVM7UUFDUixJQUFNLElBQUkseUNBQVEsS0FBSyxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUUsQ0FBQTtRQUMzQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNuQixDQUFDLEVBQ0QsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQzVDLENBQUE7SUFDRCxJQUFNLHNCQUFzQixHQUFHLG1CQUFXLENBQ3hDLFVBQW9CLEtBQVEsRUFBRSxLQUFXOztRQUN2QyxJQUFNLElBQUkseUNBQVEsS0FBSyxDQUFDLE1BQU0sZ0JBQUcsS0FBSyxJQUFHLEtBQUssTUFBRSxDQUFBO1FBQ2hELFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBUyxDQUFDLENBQUE7UUFDN0IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ25CLENBQUMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQzNELENBQUE7SUFDRCxJQUFNLGlCQUFpQixHQUFHLG1CQUFXLENBQUM7UUFDcEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFrQixDQUFDLENBQUE7UUFDdEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQy9ELElBQU0saUJBQWlCLEdBQUcsbUJBQVcsQ0FBQztRQUNwQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDaEQsT0FBTztRQUNMLEtBQUssT0FBQTtRQUNMLFFBQVEsd0NBQ0gsUUFBUSxLQUNYLGVBQWUsaUJBQUE7WUFDZixpQkFBaUIsbUJBQUE7WUFDakIsaUJBQWlCLG1CQUFBO1lBQ2pCLHNCQUFzQix3QkFBQSxHQUN2QjtLQUNGLENBQUE7QUFDSCxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLXBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVtYXRjaFJlZHVjZXIgfSBmcm9tICd1c2UtcmVtYXRjaC1yZWR1Y2VyJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB1bmlxYnkgZnJvbSAnbG9kYXNoLnVuaXFieSdcbmltcG9ydCBrZXlieSBmcm9tICdsb2Rhc2gua2V5YnknXG5pbXBvcnQgeG9yIGZyb20gJ2xvZGFzaC54b3InXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTJRdWVyeSA9IDxULCBGPihzdGF0ZTogU3RhdGU8VCwgRj4pID0+IHtcbiAgcmV0dXJuIHsgc2tpcDogKHN0YXRlLmN1cnJlbnQgLSAxKSAqIHN0YXRlLmxpbWl0LCBsaW1pdDogc3RhdGUubGltaXQsIGZpbHRlcjogc3RhdGUuZmlsdGVyIH1cbn1cblxudHlwZSBVc2VQYWdlUHJvcHM8VCwgRj4gPSB7XG4gIGFwaShxdWVyeTogeyBza2lwOiBudW1iZXI7IGxpbWl0OiBudW1iZXI7IGZpbHRlcj86IEYgfSk6IFByb21pc2U8eyBkYXRhOiBUW107IHRvdGFsPzogbnVtYmVyIH0+XG4gIGRlZmF1bHRGaWx0ZXI/OiBGXG4gIHN0YXRlMlF1ZXJ5PzogKHN0YXRlOiBTdGF0ZTxULCBGPikgPT4geyBza2lwOiBudW1iZXI7IGxpbWl0OiBudW1iZXI7IGZpbHRlcj86IEYgfVxuICBkYXRhS2V5Pzogc3RyaW5nXG4gIGxpbWl0PzogbnVtYmVyXG59XG5cbnR5cGUgU3RhdGU8VCwgRj4gPSB7XG4gIC8qKlxuICAgKiBvcmlnaW5hbCBsaXN0IGRhdGEgZnJvbSBhcGlcbiAgICovXG4gIGRhdGE6IFRbXVxuICBzdGF0dXM/OiAnbG9hZGluZycgfCAnZXJyb3InIHwgJ2xvYWRlZCdcbiAgdG90YWw6IG51bWJlclxuICBwYWdlczogbnVtYmVyXG4gIGN1cnJlbnQ6IG51bWJlclxuICBsaW1pdDogbnVtYmVyXG4gIGlkczogc3RyaW5nW11cbiAgZmlsdGVyPzogRlxuICBlbnRyaWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogVFxuICB9XG4gIHNlbGVjdGVkOiBzdHJpbmdbXVxuICBkYXRhS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhZ2UgPSA8VCwgRj4oe1xuICBsaW1pdCA9IDEwLFxuICBkZWZhdWx0RmlsdGVyID0gdW5kZWZpbmVkLFxuICBzdGF0ZTJRdWVyeSA9IGRlZmF1bHRTdGF0ZTJRdWVyeSxcbiAgZGF0YUtleSA9ICdpZCcsXG4gIC4uLnByb3BzXG59OiBVc2VQYWdlUHJvcHM8VCwgRj4pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZW1hdGNoUmVkdWNlcih7XG4gICAgbmFtZTogJ3VzZS1wYWdlJyxcbiAgICBzdGF0ZToge1xuICAgICAgZGF0YTogW10sXG4gICAgICBzZWxlY3RlZDogW10sXG4gICAgICBpZHM6IFtdLFxuICAgICAgcGFnZXM6IDAsXG4gICAgICBsaW1pdCxcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgY3VycmVudDogMSxcbiAgICAgIGRhdGFLZXksXG4gICAgICBlbnRyaWVzOiB7fSxcbiAgICAgIGZpbHRlcjogZGVmYXVsdEZpbHRlcixcbiAgICB9IGFzIFN0YXRlPFQsIEY+LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICBzZXREYXRhKHN0YXRlLCBwYXlsb2FkOiB7IGRhdGE6IFRbXTsgdG90YWw/OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvdGFsOiBwYXlsb2FkLnRvdGFsID8/IDAsXG4gICAgICAgICAgaWRzOiBwYXlsb2FkLmRhdGEubWFwKHYgPT4gdltkYXRhS2V5XSksXG4gICAgICAgICAgZW50cmllczoga2V5YnkocGF5bG9hZC5kYXRhLCBkYXRhS2V5KSxcbiAgICAgICAgICBwYWdlczogKHBheWxvYWQudG90YWwgPz8gMCkgLyBzdGF0ZS5saW1pdCxcbiAgICAgICAgICBkYXRhOiBwYXlsb2FkLmRhdGEsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRTZWxlY3Qoc3RhdGUsIHBheWxvYWQ6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHBheWxvYWQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2dnbGVTZWxlY3Qoc3RhdGUsIHBheWxvYWQ6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHhvcihzdGF0ZS5zZWxlY3RlZCwgcGF5bG9hZCksXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRTdGF0dXMoc3RhdGUsIHBheWxvYWQ6IFN0YXRlPFQsIEY+WydzdGF0dXMnXSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHN0YXR1czogcGF5bG9hZCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEN1cnJlbnQoc3RhdGUsIHBheWxvYWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGN1cnJlbnQ6IHBheWxvYWQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRGaWx0ZXIoc3RhdGUsIHBheWxvYWQ6IEYpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXI6IHBheWxvYWQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbGVhckZpbHRlcihzdGF0ZSwgX3BheWxvYWQ6IHZvaWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGVmZmVjdHM6IHtcbiAgICAgIGFzeW5jIGhhbmRsZUdvKHBheWxvYWQ6IG51bWJlciwgX3N0YXRlLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXR1cygnbG9hZGluZycpXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudChwYXlsb2FkKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgdG90YWwgfSA9IGF3YWl0IHByb3BzLmFwaT8uKHN0YXRlMlF1ZXJ5KHN0YXRlKSlcbiAgICAgICAgICB0aGlzLnNldFN0YXR1cygnbG9hZGVkJylcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBkYXRhOiB1bmlxYnkoc3RhdGUuZGF0YS5jb25jYXQoZGF0YSksIGRhdGFLZXkpLCB0b3RhbCB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGhhbmRsZU5leHQoX3BheWxvYWQ6IHZvaWQsIF9zdGF0ZSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVHbyhzdGF0ZS5jdXJyZW50ICsgMSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBoYW5kbGVQcmV2KF9wYXlsb2FkOiB2b2lkLCBfc3RhdGUsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlR28oc3RhdGUuY3VycmVudCAtIDEpXG4gICAgICB9LFxuICAgICAgYXN5bmMgaGFuZGxlUmVpbml0KF9wYXlsb2FkOiB2b2lkLCBfc3RhdGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVHbygxKVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGhhbmRsZVJlZnJlc2goX3BheWxvYWQ6IHZvaWQsIF9zdGF0ZSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVHbyhzdGF0ZS5jdXJyZW50KVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBjb25zdCByZWZyZXNoID0gdXNlUmVmKGRlYm91bmNlKGRpc3BhdGNoLmhhbmRsZVJlZnJlc2gsIDMwMCkpXG4gIGNvbnN0IGhhbmRsZVNldEZpbHRlciA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWx0ZXI6IEYpID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSB7IC4uLnN0YXRlLmZpbHRlciwgLi4uZmlsdGVyIH1cbiAgICAgIGRpc3BhdGNoLnNldEZpbHRlcihuZXh0KVxuICAgICAgcmVmcmVzaC5jdXJyZW50KClcbiAgICB9LFxuICAgIFtkaXNwYXRjaC5zZXRGaWx0ZXIsIHN0YXRlLmZpbHRlciwgcmVmcmVzaF0sXG4gIClcbiAgY29uc3QgaGFuZGxlU2V0RmlsdGVyQnlGaWVsZCA9IHVzZUNhbGxiYWNrKFxuICAgIDxLIGV4dGVuZHMga2V5b2YgRj4oZmlsZWQ6IEssIHZhbHVlOiBGW0tdKSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0geyAuLi5zdGF0ZS5maWx0ZXIsIFtmaWxlZF06IHZhbHVlIH1cbiAgICAgIGRpc3BhdGNoLnNldEZpbHRlcihuZXh0IGFzIEYpXG4gICAgICByZWZyZXNoLmN1cnJlbnQoKVxuICAgIH0sXG4gICAgW2Rpc3BhdGNoLnNldEZpbHRlciwgc3RhdGUuZmlsdGVyLCBkaXNwYXRjaC5oYW5kbGVSZWZyZXNoXSxcbiAgKVxuICBjb25zdCBoYW5kbGVSZXNldEZpbHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaC5zZXRGaWx0ZXIoZGVmYXVsdEZpbHRlciBhcyBGKVxuICAgIHJlZnJlc2guY3VycmVudCgpXG4gIH0sIFtkaXNwYXRjaC5zZXRGaWx0ZXIsIGRlZmF1bHRGaWx0ZXIsIGRpc3BhdGNoLmhhbmRsZVJlZnJlc2hdKVxuICBjb25zdCBoYW5kbGVDbGVhckZpbHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaC5jbGVhckZpbHRlcigpXG4gICAgcmVmcmVzaC5jdXJyZW50KClcbiAgfSwgW2Rpc3BhdGNoLnNldEZpbHRlciwgZGlzcGF0Y2guaGFuZGxlUmVmcmVzaF0pXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgZGlzcGF0Y2g6IHtcbiAgICAgIC4uLmRpc3BhdGNoLFxuICAgICAgaGFuZGxlU2V0RmlsdGVyLFxuICAgICAgaGFuZGxlUmVzZXRGaWx0ZXIsXG4gICAgICBoYW5kbGVDbGVhckZpbHRlcixcbiAgICAgIGhhbmRsZVNldEZpbHRlckJ5RmllbGQsXG4gICAgfSxcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9
