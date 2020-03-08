import React from 'react'
import { getComponentsOfA } from '../src/get-components-of-a'

const ComponentA = () => {
  return <a href="#">componenta</a>
}

const ComponentB = () => {
  return <a href="#">componentB</a>
}

describe('get-component-of-a', () => {
  test('should return component a length', () => {
    const alla = getComponentsOfA([<ComponentA />, <ComponentA />], ComponentA)
    expect(alla.length).toBe(2)
    const aandb = getComponentsOfA([<ComponentA />, <ComponentB />], ComponentA)
    expect(aandb.length).toBe(1)
    const allb = getComponentsOfA([<ComponentB />, <ComponentB />], ComponentA)
    expect(allb.length).toBe(0)
  })
})
