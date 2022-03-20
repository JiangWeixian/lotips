import React from 'react'
import { hasComponentOfA } from './has-component-of-a'

type ComponentType<T> = T[] | null | undefined

/**
 * @description get all component exclude a from react.children
 * @warning `<><componenta /></>`和`<componenta />` is different
 */
export const getComponentsOfA = <T extends React.ComponentType<any>>(
  children: React.ReactNode,
  target: T,
): ComponentType<T> => {
  return React.Children.map(children, child => {
    return hasComponentOfA(child, target) ? child : null
  }) as ComponentType<T>
}
