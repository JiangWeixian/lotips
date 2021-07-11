/**
 * @description:
 * 在一个列表中可能会出现某个字段为ID，但是我们需要的是这个ID的具体数据；在这个字段数据无法和列表同时populate的时候
 * 这个hook作用在于收集id，然后debounce请求一次并缓存，同时通知所有使用到这个hook的组件更新
 * NOTE:
 * 当然可以收集列表数据时候请求，该hook只是为了使用更方便。
 */
export declare const useBatch: <D = any>(
  type: string,
  id: string,
  api: (ids: string[]) => Promise<D[]>,
) => D | undefined
