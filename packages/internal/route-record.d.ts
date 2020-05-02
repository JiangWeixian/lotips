export const Routes: string[]

export type BasicRoute = {
  path: string
  name?: string | null
  [key: string]: any
}

export function record<T extends BasicRoute>(to: T, replaceFlag?: boolean): void
