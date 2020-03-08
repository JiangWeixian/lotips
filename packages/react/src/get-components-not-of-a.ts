import React from 'react'
import { isComponentOfA } from './is-component-of-a'

export const getComponentsNotOfA = (
  children: React.ReactNode,
  target: React.ComponentType<any>,
) => {
  return React.Children.map(children, child => {
    return !isComponentOfA(child, target) ? child : null
  })
}
