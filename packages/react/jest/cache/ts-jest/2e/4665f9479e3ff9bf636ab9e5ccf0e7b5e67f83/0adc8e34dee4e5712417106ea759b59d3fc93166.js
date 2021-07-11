'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var react_1 = tslib_1.__importDefault(require('react'))
var get_components_not_of_a_1 = require('../src/get-components-not-of-a')
var ComponentA = function() {
  return react_1.default.createElement('a', { href: '#' }, 'componenta')
}
var ComponentB = function() {
  return react_1.default.createElement('a', { href: '#' }, 'componentB')
}
describe('get-component-not-of-a', function() {
  test('should return component a length', function() {
    var alla = get_components_not_of_a_1.getComponentsNotOfA(
      [
        react_1.default.createElement(ComponentA, null),
        react_1.default.createElement(ComponentA, null),
      ],
      ComponentA,
    )
    expect(alla.length).toBe(0)
    var aandb = get_components_not_of_a_1.getComponentsNotOfA(
      [
        react_1.default.createElement(ComponentA, null),
        react_1.default.createElement(ComponentB, null),
      ],
      ComponentA,
    )
    expect(aandb.length).toBe(1)
    var allb = get_components_not_of_a_1.getComponentsNotOfA(
      [
        react_1.default.createElement(ComponentB, null),
        react_1.default.createElement(ComponentB, null),
      ],
      ComponentA,
    )
    expect(allb.length).toBe(2)
  })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L2dldC1jb21wb25lbnRzLW5vdC1vZi1hLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUF5QjtBQUN6QiwwRUFBb0U7QUFFcEUsSUFBTSxVQUFVLEdBQUc7SUFDakIsT0FBTyxxQ0FBRyxJQUFJLEVBQUMsR0FBRyxpQkFBZSxDQUFBO0FBQ25DLENBQUMsQ0FBQTtBQUVELElBQU0sVUFBVSxHQUFHO0lBQ2pCLE9BQU8scUNBQUcsSUFBSSxFQUFDLEdBQUcsaUJBQWUsQ0FBQTtBQUNuQyxDQUFDLENBQUE7QUFFRCxRQUFRLENBQUMsd0JBQXdCLEVBQUU7SUFDakMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFO1FBQ3ZDLElBQU0sSUFBSSxHQUFHLDZDQUFtQixDQUFDLENBQUMsOEJBQUMsVUFBVSxPQUFHLEVBQUUsOEJBQUMsVUFBVSxPQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFNLEtBQUssR0FBRyw2Q0FBbUIsQ0FBQyxDQUFDLDhCQUFDLFVBQVUsT0FBRyxFQUFFLDhCQUFDLFVBQVUsT0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDL0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUIsSUFBTSxJQUFJLEdBQUcsNkNBQW1CLENBQUMsQ0FBQyw4QkFBQyxVQUFVLE9BQUcsRUFBRSw4QkFBQyxVQUFVLE9BQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L2dldC1jb21wb25lbnRzLW5vdC1vZi1hLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldENvbXBvbmVudHNOb3RPZkEgfSBmcm9tICcuLi9zcmMvZ2V0LWNvbXBvbmVudHMtbm90LW9mLWEnXG5cbmNvbnN0IENvbXBvbmVudEEgPSAoKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPVwiI1wiPmNvbXBvbmVudGE8L2E+XG59XG5cbmNvbnN0IENvbXBvbmVudEIgPSAoKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPVwiI1wiPmNvbXBvbmVudEI8L2E+XG59XG5cbmRlc2NyaWJlKCdnZXQtY29tcG9uZW50LW5vdC1vZi1hJywgKCkgPT4ge1xuICB0ZXN0KCdzaG91bGQgcmV0dXJuIGNvbXBvbmVudCBhIGxlbmd0aCcsICgpID0+IHtcbiAgICBjb25zdCBhbGxhID0gZ2V0Q29tcG9uZW50c05vdE9mQShbPENvbXBvbmVudEEgLz4sIDxDb21wb25lbnRBIC8+XSwgQ29tcG9uZW50QSlcbiAgICBleHBlY3QoYWxsYS5sZW5ndGgpLnRvQmUoMClcbiAgICBjb25zdCBhYW5kYiA9IGdldENvbXBvbmVudHNOb3RPZkEoWzxDb21wb25lbnRBIC8+LCA8Q29tcG9uZW50QiAvPl0sIENvbXBvbmVudEEpXG4gICAgZXhwZWN0KGFhbmRiLmxlbmd0aCkudG9CZSgxKVxuICAgIGNvbnN0IGFsbGIgPSBnZXRDb21wb25lbnRzTm90T2ZBKFs8Q29tcG9uZW50QiAvPiwgPENvbXBvbmVudEIgLz5dLCBDb21wb25lbnRBKVxuICAgIGV4cGVjdChhbGxiLmxlbmd0aCkudG9CZSgyKVxuICB9KVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==
