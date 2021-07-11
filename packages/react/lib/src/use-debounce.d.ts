/**
 * WHY:
 * a debounced hooks
 * USAGE:
 * 正常使用setValue即可
 * NOTE:
 * （以修改filter为例）
 * - debouncedValue - 是最后生效的数据，用于filter数据请求
 * - value - 实际修改的数据，用于filter数据展示
 */
/// <reference types="react" />
declare type UseDebounceProps<T = any> = {
  interval?: number
  defaultValue?: T
}
export declare const useDebounce: <T>({
  interval,
  ...props
}: UseDebounceProps<T>) => {
  value: T | undefined
  debouncedValue: T | undefined
  setValue: import('react').Dispatch<import('react').SetStateAction<T | undefined>>
}
export {}
