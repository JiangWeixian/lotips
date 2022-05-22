import { describe, it, expect } from 'vitest'

import { direction } from '../src/random'

describe("random", () => {
  it('random direction -1/1', () => {
    expect([-1, 1].includes(direction())).toBe(true)
  })
})
