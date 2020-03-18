# @lotips/react
> do something for `react` just like `lodash`

*No styles, No components, With pure ts*

- [@lotips/react](#lotipsreact)
  - [hooks](#hooks)
  - [components tools](#components-tools)

## hooks

- useAsyncState - 异步的初始化`state`
- useAsyncEffect - `useEffect`传递异步的函数
- useClickBoardObserver - 跨`Tab`的监听剪贴板（**需要赋予权限**）
- useClickOutside - 一个`DOM`节点内外的点击事件
- useHybridBack - `Hybrid`页面的返回按钮
- useDebounce - `debounce`的`hooks`版本
- useBatch - 批量的同时请求数据，不需要而外传递`ids`。而是收集`id`进行`debounce`请求。
  
## components tools

- getComponentsNotOfA - 从`children`中获取非`A`的组件
- getComponentOfA - 从`children`中获取`A`的组件
- hasComponentOfA - 从`children`中是否`A`的组件