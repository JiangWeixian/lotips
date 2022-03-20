import React, { Children, isValidElement } from 'react'

/**
 * @description react children contain target or not
 * @warning `<><componenta /></>`和`<componenta />` is different
 */
export const hasComponentOfA = (children: React.ReactNode, target?: React.ComponentType<any>) => {
  return Children.toArray(children).some(child => {
    if (isValidElement(child)) return child.type === target

    return false
  })
}
