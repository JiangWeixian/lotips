/**
 * WHY:
 * get all component a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
import React from 'react'
export declare const getComponentsNotOfA: (
  children: React.ReactNode,
  target: React.ComponentType<any>,
) => {}[] | null | undefined
