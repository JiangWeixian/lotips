import React from 'react'
import { getComponentsNotOfA } from '../src/get-components-not-of-a'

const ComponentA = () => {
  return <a href="#">componenta</a>
}

const ComponentB = () => {
  return <a href="#">componentB</a>
}

describe('get-component-not-of-a', () => {
  test('should return component a length', () => {
    const alla = getComponentsNotOfA([<ComponentA />, <ComponentA />], ComponentA)
    expect(alla.length).toBe(0)
    const aandb = getComponentsNotOfA([<ComponentA />, <ComponentB />], ComponentA)
    expect(aandb.length).toBe(1)
    const allb = getComponentsNotOfA([<ComponentB />, <ComponentB />], ComponentA)
    expect(allb.length).toBe(2)
  })
})
