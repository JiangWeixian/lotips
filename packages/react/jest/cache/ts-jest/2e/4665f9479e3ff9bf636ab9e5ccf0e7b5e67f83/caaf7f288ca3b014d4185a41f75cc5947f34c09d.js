'use strict'
/**
 * @description:
 * 在一个列表中可能会出现某个字段为ID，但是我们需要的是这个ID的具体数据；在这个字段数据无法和列表同时populate的时候
 * 这个hook作用在于收集id，然后debounce请求一次并缓存，同时通知所有使用到这个hook的组件更新
 * NOTE:
 * 当然可以收集列表数据时候请求，该hook只是为了使用更方便。
 */
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = require('react')
var buffer = {}
var running = {}
var interval = 10
var listByIds = function(type, fetcher) {
  return tslib_1.__awaiter(void 0, void 0, void 0, function() {
    var keys, data
    return tslib_1.__generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          keys = Object.keys(buffer[type])
          if (keys.length === 0) {
            running[type] = false
            return [2 /*return*/]
          }
          return [4 /*yield*/, fetcher(keys)]
        case 1:
          data = _a.sent()
          keys.forEach(function(k, i) {
            var callbacks = buffer[type][k]
            delete buffer[type][k]
            callbacks.forEach(function(callback) {
              callback(data[i] || undefined)
            })
          })
          setTimeout(function() {
            return listByIds(type, fetcher)
          }, interval)
          return [2 /*return*/]
      }
    })
  })
}
exports.useBatch = function(type, id, api) {
  var _a = react_1.useState(),
    item = _a[0],
    setItem = _a[1]
  react_1.useEffect(
    function() {
      if (!id) {
        return
      }
      new Promise(function(resolve) {
        buffer[type] = buffer[type] || {}
        buffer[type][id] = buffer[type][id] || []
        buffer[type][id].push(resolve)
        if (!running[type]) {
          running[type] = true
          setTimeout(function() {
            return listByIds(type, api)
          }, interval)
        }
      }).then(setItem)
    },
    [type, id],
  )
  return item
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLWJhdGNoLnRzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUVILCtCQUEyQztBQUUzQyxJQUFNLE1BQU0sR0FBRyxFQUF1RCxDQUFBO0FBRXRFLElBQU0sT0FBTyxHQUFHLEVBQWlDLENBQUE7QUFFakQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFBO0FBRW5CLElBQU0sU0FBUyxHQUFHLFVBQWdCLElBQVksRUFBRSxPQUF3Qzs7Ozs7Z0JBQ2hGLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO29CQUNyQixzQkFBTTtpQkFDUDtnQkFDWSxxQkFBTSxPQUFPLENBQUMsSUFBYSxDQUFDLEVBQUE7O2dCQUFuQyxJQUFJLEdBQUcsU0FBNEI7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDaEIsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNqQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7d0JBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUE7b0JBQ2hDLENBQUMsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFBO2dCQUNGLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQTs7OztLQUNyRCxDQUFBO0FBRVksUUFBQSxRQUFRLEdBQUcsVUFDdEIsSUFBWSxFQUNaLEVBQVUsRUFDVixHQUFvQztJQUU5QixJQUFBLHVCQUErQixFQUE5QixZQUFJLEVBQUUsZUFBd0IsQ0FBQTtJQUNyQyxpQkFBUyxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU07U0FDUDtRQUNELElBQUksT0FBTyxDQUFJLFVBQUEsT0FBTztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUNqRDtRQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNsQixDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUVkLE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWFuZ3dlaS9wcm9qZWN0cy9sb3RpcHMvcGFja2FnZXMvcmVhY3Qvc3JjL3VzZS1iYXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBkZXNjcmlwdGlvbjpcbiAqIOWcqOS4gOS4quWIl+ihqOS4reWPr+iDveS8muWHuueOsOafkOS4quWtl+auteS4uklE77yM5L2G5piv5oiR5Lus6ZyA6KaB55qE5piv6L+Z5LiqSUTnmoTlhbfkvZPmlbDmja7vvJvlnKjov5nkuKrlrZfmrrXmlbDmja7ml6Dms5XlkozliJfooajlkIzml7Zwb3B1bGF0ZeeahOaXtuWAmVxuICog6L+Z5LiqaG9va+S9nOeUqOWcqOS6juaUtumbhmlk77yM54S25ZCOZGVib3VuY2Xor7fmsYLkuIDmrKHlubbnvJPlrZjvvIzlkIzml7bpgJrnn6XmiYDmnInkvb/nlKjliLDov5nkuKpob29r55qE57uE5Lu25pu05pawXG4gKiBOT1RFOlxuICog5b2T54S25Y+v5Lul5pS26ZuG5YiX6KGo5pWw5o2u5pe25YCZ6K+35rGC77yM6K+laG9va+WPquaYr+S4uuS6huS9v+eUqOabtOaWueS+v+OAglxuICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgYnVmZmVyID0ge30gYXMgeyBbdHlwZTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdIH0gfVxuXG5jb25zdCBydW5uaW5nID0ge30gYXMgeyBbdHlwZTogc3RyaW5nXTogYm9vbGVhbiB9XG5cbmNvbnN0IGludGVydmFsID0gMTBcblxuY29uc3QgbGlzdEJ5SWRzID0gYXN5bmMgPEQgPSBhbnk+KHR5cGU6IHN0cmluZywgZmV0Y2hlcjogKGlkczogc3RyaW5nW10pID0+IFByb21pc2U8RFtdPikgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYnVmZmVyW3R5cGVdKVxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBydW5uaW5nW3R5cGVdID0gZmFsc2VcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hlcihrZXlzIGFzIGFueVtdKVxuICBrZXlzLmZvckVhY2goKGssIGkpID0+IHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBidWZmZXJbdHlwZV1ba11cbiAgICBkZWxldGUgYnVmZmVyW3R5cGVdW2tdXG4gICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YVtpXSB8fCB1bmRlZmluZWQpXG4gICAgfSlcbiAgfSlcbiAgc2V0VGltZW91dCgoKSA9PiBsaXN0QnlJZHModHlwZSwgZmV0Y2hlciksIGludGVydmFsKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQmF0Y2ggPSA8RCA9IGFueT4oXG4gIHR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgYXBpOiAoaWRzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxEW10+LFxuKSA9PiB7XG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPEQ+KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbmV3IFByb21pc2U8RD4ocmVzb2x2ZSA9PiB7XG4gICAgICBidWZmZXJbdHlwZV0gPSBidWZmZXJbdHlwZV0gfHwge31cbiAgICAgIGJ1ZmZlclt0eXBlXVtpZF0gPSBidWZmZXJbdHlwZV1baWRdIHx8IFtdXG4gICAgICBidWZmZXJbdHlwZV1baWRdLnB1c2gocmVzb2x2ZSlcbiAgICAgIGlmICghcnVubmluZ1t0eXBlXSkge1xuICAgICAgICBydW5uaW5nW3R5cGVdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpc3RCeUlkcyh0eXBlLCBhcGkpLCBpbnRlcnZhbClcbiAgICAgIH1cbiAgICB9KS50aGVuKHNldEl0ZW0pXG4gIH0sIFt0eXBlLCBpZF0pXG5cbiAgcmV0dXJuIGl0ZW1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==
