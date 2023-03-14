import type { Options } from 'sortablejs'
import type { Ref } from 'vue'

export type VueDraggableOptions = Options
export type RefOrValue<T> = T | Ref<T>
export type RefOrElement<T = HTMLElement> =
  | T
  | Ref<T | undefined | null>
  | string
export type Fn = (...args: any[]) => any
