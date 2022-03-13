import { uniq } from 'lodash-es'

type ExportsTemplateParams = {
  names: string[]
  formats?: Array<'cjs' | 'esm' | 'es'>
  dirs?:
    | string
    | {
        cjs: string
        esm: string
      }
  exts?:
    | string
    | {
        cjs: string
        esm: string
      }
  types?:
    | boolean
    | {
        dir: string
      }
}

type PartPkg = {
  exports: Record<string, Record<string, string> | string>
  main?: string
  module?: string
  types?: string
  typesVersions?: Record<string, Record<string, string[]>>
}

export const exportsTemplate = ({
  names,
  formats = ['cjs', 'esm'],
  dirs = 'dist',
  types = true,
  exts = { cjs: 'cjs', esm: 'mjs' },
}: ExportsTemplateParams) => {
  const pkg: PartPkg = {
    exports: {},
  }
  // resolve options
  const _formats = uniq(
    formats.map(format => {
      if (format === 'es') {
        return 'esm'
      }
      return format
    }),
  )
  const _dirs =
    typeof dirs === 'string'
      ? {
          cjs: dirs,
          esm: dirs,
        }
      : dirs
  const _exts =
    typeof exts === 'string'
      ? {
          cjs: exts,
          esm: exts,
        }
      : exts
  const _types =
    typeof types === 'boolean'
      ? {
          dir: _dirs.cjs,
        }
      : undefined
  pkg.exports['./package.json'] = './package.json'
  if (types) {
    pkg.typesVersions = {
      '*': {},
    }
  }
  const subExport = (name: string) => {
    const results: Record<string, string> = {}
    _formats.forEach(format => {
      if (format === 'cjs') {
        results.require = `./${_dirs.cjs}/${name}.${_exts.cjs}`
      }
      if (format === 'cjs') {
        results.import = `./${_dirs.esm}/${name}.${_exts.esm}`
      }
      if (_types) {
        results.types = `./${_types.dir}/${name}.d.ts`
      }
    })
    return results
  }
  names.forEach(name => {
    if (name === 'index') {
      pkg.exports['.'] = subExport('index')
      pkg.main = pkg.exports['.'].require.slice(2)
      pkg.module = pkg.exports['.'].import.slice(2)
      if (types) {
        pkg.types = pkg.exports['.'].types.slice(2)
      }
    } else {
      pkg.exports[`./${name}`] = subExport(name)
      if (_types) {
        pkg.typesVersions!['*'][`${_types.dir}/${name}`] = [
          (pkg.exports[`./${name}`] as Record<string, string>).types.slice(2).replace('.d.ts', ''),
        ]
      }
    }
  })
  return pkg
}
