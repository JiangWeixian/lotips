import uniq from 'lodash-es/uniq'
import isEmpty from 'lodash-es/isEmpty'

const FIELDS = ['main', 'module', 'typesVersion', 'exports', 'types'] as const

export type ExportsTemplateParams = {
  /**
   * Exported module names
   */
  names: string[]
  /**
   * Exported formats, impact `exports.require` or `exports.import`
   * @default ['cjs', 'es']
   */
  formats?: Array<'cjs' | 'es'>
  /**
   * Bundled files dir
   * @default dist
   */
  dirs?:
    | string
    | {
        cjs: string
        es: string
      }
  /**
   * Config cjs format and es format ext
   * @default { cjs: 'cjs', es: 'mjs' }
   */
  exts?:
    | string
    | {
        cjs: string
        es: string
      }
  /**
   * Config `typesVersions`, `exports.types` and `types`
   * Specific types dir
   * @example false, will disable `typesVersions`, `exports.types` and `types`
   */
  types?:
    | boolean
    | {
        dir: string
      }
  /**
   * Force disable partial fields, regardless of other settings
   */
  disabledFields?: typeof FIELDS[number][]
}

type PartPkg = {
  exports: Record<string, Record<string, string> | string>
  main?: string
  module?: string
  types?: string
  typesVersions?: Record<string, Record<string, string[]>>
}

/**
 * @description generate package.json exports/typesVersions/main/module/types field
 * @category template
 * @example exportsTemplate({
 *  names: ['index', 'ua', 'do-something/index']
 * })
 */
export const exportsTemplate = ({
  names,
  formats = ['cjs', 'es'],
  dirs = 'dist',
  types = true,
  exts = { cjs: 'cjs', es: 'mjs' },
  disabledFields = [],
}: ExportsTemplateParams) => {
  const pkg: PartPkg = {
    exports: {},
  }
  // resolve options
  const _formats = uniq(formats)
  const _dirs =
    typeof dirs === 'string'
      ? {
          cjs: dirs,
          es: dirs,
        }
      : dirs
  const _exts =
    typeof exts === 'string'
      ? {
          cjs: exts,
          es: exts,
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
      if (format === 'es') {
        results.import = `./${_dirs.es}/${name}.${_exts.es}`
      }
      if (_types) {
        results.types = `./${_types.dir}/${name}.d.ts`
      }
    })
    return results
  }
  const prettyName = (name: string) => {
    if (name.endsWith('/index')) {
      return name.slice(0, -6)
    }
    return name
  }
  names.forEach(name => {
    if (name === 'index') {
      pkg.exports['.'] = subExport('index')
      pkg.main = pkg.exports['.'].require.slice(2)
      pkg.module = formats.includes('es') ? pkg.exports['.'].import.slice(2) : undefined
      if (types) {
        pkg.types = pkg.exports['.'].types.slice(2)
      }
    } else {
      const _name = prettyName(name)
      pkg.exports[`./${_name}`] = subExport(name)
      if (_types) {
        pkg.typesVersions!['*'][_name] = [
          (pkg.exports[`./${_name}`] as Record<string, string>).types.slice(2),
        ]
      }
    }
  })
  if (isEmpty(pkg.typesVersions!['*'])) {
    delete pkg.typesVersions
  }
  // force disable field
  for (const field of disabledFields) {
    delete pkg[field]
  }
  return pkg
}
