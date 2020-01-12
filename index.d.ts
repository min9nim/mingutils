declare module 'mingutils' {
  export function findById(_id: string): (list: any[]) => any
  export function OR(
    pred1: (arg: any) => boolean,
    pred2: (arg: any) => boolean,
  ): (arg: any) => boolean
  export function AND(
    pred1: (arg: any) => boolean,
    pred2: (arg: any) => boolean,
  ): (arg: any) => boolean
  export const exclude: any
  export const isNotNil: any
  export const highlight: any
  export const removeTag: any
  export const peek: any
  export const go: any
  export const costant: any
  export const noop: any
  export const indexMap: any
  export const idEqual: any
  export const updateBy: any
  export const removeBy: any
  export const updateById: any
  export const removeById: any
  export const addLink: any
  export const flatLog: any
  export const forceFileDownload: any
  export const download: any
  export const getHostname: any
  export const getProtocol: any
  export const appendQueryParams: any
  export const timer: any
  export const delay: any
  export const copyToClipboard: any
  export const blinkDomElement: any
  export const getQueryParams: (url: string) => {[key: string]: string}
  export const nl2br: (str: string) => string
}
