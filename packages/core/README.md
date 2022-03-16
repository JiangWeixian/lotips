# @lotips/core
*utility for vanilla js*

### `do-highlight`

replace `highlight` -> `<mark>highlight</mark>` with with vanilla js.

```ts
doHighlight('hello world', 'world')

// hello <mark>world</mark>
```

### `do-search`

search website content with keyword, and highlight it.

```ts
doSearch('world')
```

### `exports-template`

generate package's exports field.

```ts
const exports = exportsTemplate({
  names: ['index', 'ua', 'do-something/index']
})
```

### ua

- `is-mobile`
- `is-iOS`
- `is-android`
