import { describe, it, expect } from 'vitest'

import { exportsTemplate } from '../src/exports-template'

describe('exports template', () => {
  it('demo part', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua', 'do-something/index']
    })
    expect(exports).toMatchSnapshot('basic')
  })
})
