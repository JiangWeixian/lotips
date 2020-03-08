/**
 * react children contain target or not
 */

import { Children, isValidElement } from 'react'

export const hasComponentOfA = (children: React.ReactNode, target?: React.ComponentType<any>) => {
  return Children.toArray(children).some(child => {
    if (isValidElement(child)) {
      // tslint:disable-next-line: no-any
      return child.type === target
    }
    return false
  })
}
