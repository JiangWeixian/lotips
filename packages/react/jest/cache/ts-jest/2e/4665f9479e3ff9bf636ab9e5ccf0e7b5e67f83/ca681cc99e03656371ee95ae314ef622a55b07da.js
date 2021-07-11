'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
exports.useAsyncState = function(value, _a) {
  var _b = (_a === void 0 ? { nullstate: undefined } : _a).nullstate,
    nullstate = _b === void 0 ? undefined : _b
  var _c = react_1.useState(nullstate),
    state = _c[0],
    set = _c[1]
  var get = react_1.useMemo(
    function() {
      return state === nullstate ? value : state
    },
    [value, state, nullstate],
  )
  return [get, set]
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLWFzeW5jLXN0YXRlLnRzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7O0FBRUgsK0JBQWdEO0FBTW5DLFFBQUEsYUFBYSxHQUFHLFVBQzNCLEtBQVMsRUFDVCxFQUF3RTtRQUF0RSw4REFBcUIsRUFBckIsMENBQXFCO0lBRWpCLElBQUEsZ0NBQXFDLEVBQXBDLGFBQUssRUFBRSxXQUE2QixDQUFBO0lBQzNDLElBQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQztRQUNsQixPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQzVDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUM3QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBaUQsQ0FBQTtBQUNuRSxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLWFzeW5jLXN0YXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV0hZOlxuICogYGBgdHN4XG4gKiBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gKiAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaSgpXG4gKiAgICAgc2V0U3RhdGUoZGF0YSlcbiAqICB9XG4gKiB9LCBbXSlcbiAqIE5PVEU6XG4gKiAtIOS9huacieaXtuaVsOaNruaYr+adpeiHqnJlZHV455qE5byC5q2l6I635Y+W77yM5Zyo5Lul5LiL5YGH6K6+5LiL6K+laG9va+avlOi+g+WunueUqOOAguayoeacieebuOW6lOeahHN0YXRlIGFjdGlvbu+8jOaIluiAheS4jemcgOimgeebuOW6lOeahHN0YXRlIGFjdGlvblxuICogV0FSTklORzpcbiAqIC0g6YCC5ZCI5a+55ZCM5LiA5LiqSUTnmoTlr7nosaHov5vooYzkv67mlLnjgILlnKhgRm9ybWDkuK3nmoTmtonlj4rliLDph43lpI3nmoTliJ3lp4vljJbnmoTmg4XlhrXvvIzkuI3lpKrlkIjpgIJgdXNlQXN5bmNTdGF0ZWBcbiAqIGBgYFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBVc2VBc3luY1N0YXRlUHJvcHMgPSB7XG4gIG51bGxzdGF0ZT86IGFueVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXN5bmNTdGF0ZSA9IDxUPihcbiAgdmFsdWU/OiBULFxuICB7IG51bGxzdGF0ZSA9IHVuZGVmaW5lZCB9OiBVc2VBc3luY1N0YXRlUHJvcHMgPSB7IG51bGxzdGF0ZTogdW5kZWZpbmVkIH0sXG4pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRdID0gdXNlU3RhdGU8VD4obnVsbHN0YXRlKVxuICBjb25zdCBnZXQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gc3RhdGUgPT09IG51bGxzdGF0ZSA/IHZhbHVlIDogc3RhdGVcbiAgfSwgW3ZhbHVlLCBzdGF0ZSwgbnVsbHN0YXRlXSlcbiAgcmV0dXJuIFtnZXQsIHNldF0gYXMgW1QsIFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFQ+Pl1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==
