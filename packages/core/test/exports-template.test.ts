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

describe('feat: disable fields', () => {
  it('empty disable fields should not del fields', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua', 'do-something/index'],
      disabledFields: []
    })
    expect(exports.types).toBeDefined()
  })

  it('disable fields should work', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua', 'do-something/index'],
      disabledFields: ['types']
    })
    expect(exports.types).toBeUndefined()
  })
})

describe('feat: config types', () => {
  it('default dts dir is dist', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua'],
    })
    expect(exports.types).toBe('dist/index.d.ts')
  })

  it('config types dir should work', () => {
    const exports = exportsTemplate({
      names: ['index', 'ua'],
      types: {
        dir: 'dts'
      }
    })
    expect(exports.types).toBe('dts/index.d.ts')
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
