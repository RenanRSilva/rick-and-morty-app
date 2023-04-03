export enum ContextType {
  character = '/character',
  location = '/location',
  episode = '/episode',
}

export enum ContextTypeDetail {
  character = '/character/[slug]',
  location = '/location/[slug]',
  episode = '/episode/[slug]',
}
