'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = require('react')
exports.useDebounce = function(_a) {
  var interval = _a.interval,
    props = tslib_1.__rest(_a, ['interval'])
  var _b = react_1.useState(props.defaultValue),
    value = _b[0],
    setValue = _b[1]
  var _c = react_1.useState(props.defaultValue),
    debouncedValue = _c[0],
    setDebouncedValue = _c[1]
  react_1.useEffect(
    function() {
      var timer = setTimeout(function() {
        setDebouncedValue(value)
      }, interval)
      return function() {
        clearTimeout(timer)
      }
    },
    [value, interval],
  )
  return {
    value: value,
    debouncedValue: debouncedValue,
    setValue: setValue,
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLWRlYm91bmNlLnRzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7OztBQUVILCtCQUEyQztBQU85QixRQUFBLFdBQVcsR0FBRyxVQUFJLEVBQTJDO0lBQXpDLElBQUEsc0JBQVEsRUFBRSx3Q0FBUTtJQUMzQyxJQUFBLHlDQUErRCxFQUE5RCxhQUFLLEVBQUUsZ0JBQXVELENBQUE7SUFDL0QsSUFBQSx5Q0FBaUYsRUFBaEYsc0JBQWMsRUFBRSx5QkFBZ0UsQ0FBQTtJQUN2RixpQkFBUyxDQUFDO1FBQ1IsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNaLE9BQU87WUFDTCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDckIsT0FBTztRQUNMLEtBQUssT0FBQTtRQUNMLGNBQWMsZ0JBQUE7UUFDZCxRQUFRLFVBQUE7S0FDVCxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWFuZ3dlaS9wcm9qZWN0cy9sb3RpcHMvcGFja2FnZXMvcmVhY3Qvc3JjL3VzZS1kZWJvdW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdIWTpcbiAqIGEgZGVib3VuY2VkIGhvb2tzXG4gKiBVU0FHRTpcbiAqIOato+W4uOS9v+eUqHNldFZhbHVl5Y2z5Y+vXG4gKiBOT1RFOlxuICog77yI5Lul5L+u5pS5ZmlsdGVy5Li65L6L77yJXG4gKiAtIGRlYm91bmNlZFZhbHVlIC0g5piv5pyA5ZCO55Sf5pWI55qE5pWw5o2u77yM55So5LqOZmlsdGVy5pWw5o2u6K+35rGCXG4gKiAtIHZhbHVlIC0g5a6e6ZmF5L+u5pS555qE5pWw5o2u77yM55So5LqOZmlsdGVy5pWw5o2u5bGV56S6XG4gKi9cblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIFVzZURlYm91bmNlUHJvcHM8VCA9IGFueT4gPSB7XG4gIGludGVydmFsPzogbnVtYmVyXG4gIGRlZmF1bHRWYWx1ZT86IFRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZURlYm91bmNlID0gPFQ+KHsgaW50ZXJ2YWwsIC4uLnByb3BzIH06IFVzZURlYm91bmNlUHJvcHM8VD4pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxUIHwgdW5kZWZpbmVkPihwcm9wcy5kZWZhdWx0VmFsdWUpXG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGU8VCB8IHVuZGVmaW5lZD4ocHJvcHMuZGVmYXVsdFZhbHVlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSlcbiAgICB9LCBpbnRlcnZhbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgfSwgW3ZhbHVlLCBpbnRlcnZhbF0pXG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgZGVib3VuY2VkVmFsdWUsXG4gICAgc2V0VmFsdWUsXG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==
