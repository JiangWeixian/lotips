"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var has_component_of_a_1 = require("../src/has-component-of-a");
var ComponentA = function () {
    return react_1.default.createElement("a", { href: "#" }, "componenta");
};
describe('has-component-of-a', function () {
    test('should return true if children contain target component', function () {
        var isContained = has_component_of_a_1.hasComponentOfA([react_1.default.createElement(ComponentA, null), react_1.default.createElement(ComponentA, null)], ComponentA);
        expect(isContained).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2xvdGlwcy9wYWNrYWdlcy9yZWFjdC90ZXN0L2hhcy1jb21wb25lbnQtb2YtYS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBeUI7QUFDekIsZ0VBQTJEO0FBRTNELElBQU0sVUFBVSxHQUFHO0lBQ2pCLE9BQU8scUNBQUcsSUFBSSxFQUFDLEdBQUcsaUJBQWUsQ0FBQTtBQUNuQyxDQUFDLENBQUE7QUFFRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDN0IsSUFBSSxDQUFDLHlEQUF5RCxFQUFFO1FBQzlELElBQU0sV0FBVyxHQUFHLG9DQUFlLENBQUMsQ0FBQyw4QkFBQyxVQUFVLE9BQUcsRUFBRSw4QkFBQyxVQUFVLE9BQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ2pGLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvamlhbmd3ZWkvcHJvamVjdHMvbG90aXBzL3BhY2thZ2VzL3JlYWN0L3Rlc3QvaGFzLWNvbXBvbmVudC1vZi1hLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGhhc0NvbXBvbmVudE9mQSB9IGZyb20gJy4uL3NyYy9oYXMtY29tcG9uZW50LW9mLWEnXG5cbmNvbnN0IENvbXBvbmVudEEgPSAoKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPVwiI1wiPmNvbXBvbmVudGE8L2E+XG59XG5cbmRlc2NyaWJlKCdoYXMtY29tcG9uZW50LW9mLWEnLCAoKSA9PiB7XG4gIHRlc3QoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiBjaGlsZHJlbiBjb250YWluIHRhcmdldCBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgY29uc3QgaXNDb250YWluZWQgPSBoYXNDb21wb25lbnRPZkEoWzxDb21wb25lbnRBIC8+LCA8Q29tcG9uZW50QSAvPl0sIENvbXBvbmVudEEpXG4gICAgZXhwZWN0KGlzQ29udGFpbmVkKS50b0JlKHRydWUpXG4gIH0pXG59KVxuIl0sInZlcnNpb24iOjN9