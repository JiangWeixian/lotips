import { describe, it, expect } from 'vitest'

import { exportsTemplate } from '../src/exports-template'

describe('exports template', () => {
  it('basic', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua', 'do-something/index']
    })
    expect(exports).toMatchSnapshot('basic')
  })

  it('only index file', () => {
    const exports = exportsTemplate({
      names: ['index']
    })
    expect(exports).toMatchSnapshot('index only')
  })

  it('non index file, main/module/types filed will be empty', () => {
    const exports = exportsTemplate({
      names: ['ua']
    })
    expect(exports).toMatchSnapshot('non index')
  })
})
