"use strict";
/**
 * WHY:
 * react children contain target or not
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.hasComponentOfA = function (children, target) {
    return react_1.Children.toArray(children).some(function (child) {
        if (react_1.isValidElement(child)) {
            return child.type === target;
        }
        return false;
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvaGFzLWNvbXBvbmVudC1vZi1hLnRzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwrQkFBdUQ7QUFFMUMsUUFBQSxlQUFlLEdBQUcsVUFBQyxRQUF5QixFQUFFLE1BQWlDO0lBQzFGLE9BQU8sZ0JBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztRQUMxQyxJQUFJLHNCQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQTtTQUM3QjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvaGFzLWNvbXBvbmVudC1vZi1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV0hZOlxuICogcmVhY3QgY2hpbGRyZW4gY29udGFpbiB0YXJnZXQgb3Igbm90XG4gKiBXQVJOSU5HOlxuICogLSBgPD48Y29tcG9uZW50YSAvPjwvPmDlkoxgPGNvbXBvbmVudGEgLz5g5LiN55u45ZCMXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgaGFzQ29tcG9uZW50T2ZBID0gKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIHRhcmdldD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PikgPT4ge1xuICByZXR1cm4gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuc29tZShjaGlsZCA9PiB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09IHRhcmdldFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==