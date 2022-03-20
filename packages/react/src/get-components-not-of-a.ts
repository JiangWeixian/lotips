import React from 'react'
import { hasComponentOfA } from './has-component-of-a'

/**
 * @description get all component a from react.children
 * @warning `<><componenta /></>`和`<componenta />` is different
 */
export const getComponentsNotOfA = (
  children: React.ReactNode,
  target: React.ComponentType<any>,
) => {
  return React.Children.map(children, child => {
    return !hasComponentOfA(child, target) ? child : null
  })
}
