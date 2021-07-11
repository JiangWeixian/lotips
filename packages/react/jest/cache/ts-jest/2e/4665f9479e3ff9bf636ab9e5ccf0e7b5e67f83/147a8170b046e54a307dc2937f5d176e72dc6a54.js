"use strict";
/**
 * WHY:
 * get all component a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var has_component_of_a_1 = require("./has-component-of-a");
exports.getComponentsNotOfA = function (children, target) {
    return react_1.default.Children.map(children, function (child) {
        return !has_component_of_a_1.hasComponentOfA(child, target) ? child : null;
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvZ2V0LWNvbXBvbmVudHMtbm90LW9mLWEudHMiLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCx3REFBeUI7QUFDekIsMkRBQXNEO0FBRXpDLFFBQUEsbUJBQW1CLEdBQUcsVUFDakMsUUFBeUIsRUFDekIsTUFBZ0M7SUFFaEMsT0FBTyxlQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQSxLQUFLO1FBQ3ZDLE9BQU8sQ0FBQyxvQ0FBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC9zcmMvZ2V0LWNvbXBvbmVudHMtbm90LW9mLWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXSFk6XG4gKiBnZXQgYWxsIGNvbXBvbmVudCBhIGZyb20gcmVhY3QuY2hpbGRyZW5cbiAqIFdBUk5JTkc6XG4gKiAtIGA8Pjxjb21wb25lbnRhIC8+PC8+YOWSjGA8Y29tcG9uZW50YSAvPmDkuI3nm7jlkIxcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBoYXNDb21wb25lbnRPZkEgfSBmcm9tICcuL2hhcy1jb21wb25lbnQtb2YtYSdcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudHNOb3RPZkEgPSAoXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsXG4gIHRhcmdldDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+LFxuKSA9PiB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICByZXR1cm4gIWhhc0NvbXBvbmVudE9mQShjaGlsZCwgdGFyZ2V0KSA/IGNoaWxkIDogbnVsbFxuICB9KVxufVxuIl0sInZlcnNpb24iOjN9