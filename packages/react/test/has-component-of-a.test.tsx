import React from 'react'
import { hasComponentOfA } from '../src/has-component-of-a'

const ComponentA = () => {
  return <a href="#">componenta</a>
}

describe('has-component-of-a', () => {
  test('should return true if children contain target component', () => {
    const isContained = hasComponentOfA([<ComponentA />, <ComponentA />], ComponentA)
    expect(isContained).toBe(true)
  })
})
