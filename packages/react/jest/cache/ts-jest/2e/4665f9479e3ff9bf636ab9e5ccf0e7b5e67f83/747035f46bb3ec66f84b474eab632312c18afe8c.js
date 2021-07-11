'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = tslib_1.__importDefault(require('react'))
var get_components_of_a_1 = require('../src/get-components-of-a')
var ComponentA = function() {
  return react_1.default.createElement('a', { href: '#' }, 'componenta')
}
var ComponentB = function() {
  return react_1.default.createElement('a', { href: '#' }, 'componentB')
}
describe('get-component-of-a', function() {
  test('should return component a length', function() {
    var alla = get_components_of_a_1.getComponentsOfA(
      [
        react_1.default.createElement(ComponentA, null),
        react_1.default.createElement(ComponentA, null),
      ],
      ComponentA,
    )
    expect(alla.length).toBe(2)
    var aandb = get_components_of_a_1.getComponentsOfA(
      [
        react_1.default.createElement(ComponentA, null),
        react_1.default.createElement(ComponentB, null),
      ],
      ComponentA,
    )
    expect(aandb.length).toBe(1)
    var allb = get_components_of_a_1.getComponentsOfA(
      [
        react_1.default.createElement(ComponentB, null),
        react_1.default.createElement(ComponentB, null),
      ],
      ComponentA,
    )
    expect(allb.length).toBe(0)
  })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L2dldC1jb21wb25lbnRzLW9mLWEudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQXlCO0FBQ3pCLGtFQUE2RDtBQUU3RCxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLHFDQUFHLElBQUksRUFBQyxHQUFHLGlCQUFlLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUc7SUFDakIsT0FBTyxxQ0FBRyxJQUFJLEVBQUMsR0FBRyxpQkFBZSxDQUFBO0FBQ25DLENBQUMsQ0FBQTtBQUVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUM3QixJQUFJLENBQUMsa0NBQWtDLEVBQUU7UUFDdkMsSUFBTSxJQUFJLEdBQUcsc0NBQWdCLENBQUMsQ0FBQyw4QkFBQyxVQUFVLE9BQUcsRUFBRSw4QkFBQyxVQUFVLE9BQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNCLElBQU0sS0FBSyxHQUFHLHNDQUFnQixDQUFDLENBQUMsOEJBQUMsVUFBVSxPQUFHLEVBQUUsOEJBQUMsVUFBVSxPQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUM1RSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM1QixJQUFNLElBQUksR0FBRyxzQ0FBZ0IsQ0FBQyxDQUFDLDhCQUFDLFVBQVUsT0FBRyxFQUFFLDhCQUFDLFVBQVUsT0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvZ2V0LWNvbXBvbmVudHMtb2YtYS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRDb21wb25lbnRzT2ZBIH0gZnJvbSAnLi4vc3JjL2dldC1jb21wb25lbnRzLW9mLWEnXG5cbmNvbnN0IENvbXBvbmVudEEgPSAoKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPVwiI1wiPmNvbXBvbmVudGE8L2E+XG59XG5cbmNvbnN0IENvbXBvbmVudEIgPSAoKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPVwiI1wiPmNvbXBvbmVudEI8L2E+XG59XG5cbmRlc2NyaWJlKCdnZXQtY29tcG9uZW50LW9mLWEnLCAoKSA9PiB7XG4gIHRlc3QoJ3Nob3VsZCByZXR1cm4gY29tcG9uZW50IGEgbGVuZ3RoJywgKCkgPT4ge1xuICAgIGNvbnN0IGFsbGEgPSBnZXRDb21wb25lbnRzT2ZBKFs8Q29tcG9uZW50QSAvPiwgPENvbXBvbmVudEEgLz5dLCBDb21wb25lbnRBKVxuICAgIGV4cGVjdChhbGxhLmxlbmd0aCkudG9CZSgyKVxuICAgIGNvbnN0IGFhbmRiID0gZ2V0Q29tcG9uZW50c09mQShbPENvbXBvbmVudEEgLz4sIDxDb21wb25lbnRCIC8+XSwgQ29tcG9uZW50QSlcbiAgICBleHBlY3QoYWFuZGIubGVuZ3RoKS50b0JlKDEpXG4gICAgY29uc3QgYWxsYiA9IGdldENvbXBvbmVudHNPZkEoWzxDb21wb25lbnRCIC8+LCA8Q29tcG9uZW50QiAvPl0sIENvbXBvbmVudEEpXG4gICAgZXhwZWN0KGFsbGIubGVuZ3RoKS50b0JlKDApXG4gIH0pXG59KVxuIl0sInZlcnNpb24iOjN9
