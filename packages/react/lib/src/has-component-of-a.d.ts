/**
 * WHY:
 * react children contain target or not
 * WARNING:
 * - `<><componenta /></>`和`<componenta />`不相同
 */
import React from 'react'
export declare const hasComponentOfA: (
  children: React.ReactNode,
  target?: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined,
) => boolean
