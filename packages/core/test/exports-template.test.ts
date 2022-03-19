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

  it('cjs only, exports.import & module is empty', () => {
    const exports = exportsTemplate({
      names: ['ua', 'index'],
      formats: ['cjs'],
      dirs: {
        cjs: 'dist',
        es: 'dist',
      // as any for test, if dirs keys not match cjs
      } as any
    })
    expect(exports).toMatchSnapshot('cjs only')
  })
})

describe('fixtures', () => {
  it('fix #44, only allowed es not esm format', () => {
    const exports = exportsTemplate({
      names: ['ua', 'index'],
      formats: ['es', 'cjs'],
      dirs: {
        esm: 'mjs',
        cjs: 'dist',
        es: 'dist',
      // as any for test, if dirs keys not match cjs
      } as any
    })
    expect(exports).toMatchSnapshot('only allow es')
  })
})
