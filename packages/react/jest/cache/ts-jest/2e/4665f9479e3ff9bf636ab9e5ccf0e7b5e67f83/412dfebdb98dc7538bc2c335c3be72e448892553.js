'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = require('react')
var EMPTY_DEPS = []
exports.useAsyncEffect = function(callback, deps) {
  react_1.useEffect(
    function() {
      var result
      var asyncEffect = function() {
        return tslib_1.__awaiter(void 0, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, callback()]
              case 1:
                result = _a.sent()
                return [2 /*return*/]
            }
          })
        })
      }
      asyncEffect()
      return function() {
        return result && result()
      }
    },
    [(deps !== null && deps !== void 0 ? deps : EMPTY_DEPS).concat([callback])],
  )
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvdXNlLWFzeW5jLWVmZmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFFakMsSUFBTSxVQUFVLEdBQVUsRUFBRSxDQUFBO0FBRWYsUUFBQSxjQUFjLEdBQUcsVUFDNUIsUUFBb0QsRUFDcEQsSUFBWTtJQUVaLGlCQUFTLENBQUM7UUFDUixJQUFJLE1BQW1DLENBQUE7UUFDdkMsSUFBTSxXQUFXLEdBQUc7Ozs0QkFDVCxxQkFBTSxRQUFRLEVBQUUsRUFBQTs7d0JBQXpCLE1BQU0sR0FBRyxTQUFnQixDQUFBOzs7O2FBQzFCLENBQUE7UUFDRCxXQUFXLEVBQUUsQ0FBQTtRQUNiLE9BQU8sY0FBTSxPQUFBLE1BQU0sSUFBSSxNQUFNLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQTtJQUNqQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLElBQUksYUFBSixJQUFJLGNBQUosSUFBSSxHQUFJLFVBQVUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3NyYy91c2UtYXN5bmMtZWZmZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBFTVBUWV9ERVBTOiBhbnlbXSA9IFtdXG5cbmV4cG9ydCBjb25zdCB1c2VBc3luY0VmZmVjdCA9IChcbiAgY2FsbGJhY2s6ICgpID0+IFByb21pc2U8RnVuY3Rpb24gfCB1bmRlZmluZWQgfCB2b2lkPixcbiAgZGVwcz86IGFueVtdLFxuKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHJlc3VsdDogRnVuY3Rpb24gfCB1bmRlZmluZWQgfCB2b2lkXG4gICAgY29uc3QgYXN5bmNFZmZlY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjaygpXG4gICAgfVxuICAgIGFzeW5jRWZmZWN0KClcbiAgICByZXR1cm4gKCkgPT4gcmVzdWx0ICYmIHJlc3VsdCgpXG4gIH0sIFsoZGVwcyA/PyBFTVBUWV9ERVBTKS5jb25jYXQoW2NhbGxiYWNrXSldKVxufVxuIl0sInZlcnNpb24iOjN9
