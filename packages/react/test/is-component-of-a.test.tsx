import React from 'react'
import { isComponentOfA } from '../src/is-component-of-a'

const ComponentA = () => {
  return <a href="#">componenta</a>
}

describe('is-component-of-a', () => {
  test('should return true if children contain target component', () => {
    const isContained = isComponentOfA([<ComponentA />, <ComponentA />], ComponentA)
    expect(isContained).toBe(true)
  })
})
