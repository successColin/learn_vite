type Lod = {
  show: () => void,
  hide: () => void
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    _loading: Lod
  }
}