/**
 * WHY:
 * get all component exclude a from react.children
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */

import React from 'react'
import { hasComponentOfA } from './has-component-of-a'

export const getComponentsOfA = (children: React.ReactNode, target: React.ComponentType<any>) => {
  return React.Children.map(children, child => {
    return hasComponentOfA(child, target) ? child : null
  })
}
