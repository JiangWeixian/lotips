/**
 * WHY:
 * get all component exclude a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
import React from 'react';
declare type ComponentType<T> = T[] | null | undefined;
export declare const getComponentsOfA: <T extends React.ComponentType<any>>(children: React.ReactNode, target: T) => ComponentType<T>;
export {};
