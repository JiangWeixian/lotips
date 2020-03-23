/**
 * WHY:
 * react children contain target or not
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */

import { Children, isValidElement } from 'react'

export const hasComponentOfA = (children: React.ReactNode, target?: React.ComponentType<any>) => {
  return Children.toArray(children).some(child => {
    if (isValidElement(child)) {
      return child.type === target
    }
    return false
  })
}
