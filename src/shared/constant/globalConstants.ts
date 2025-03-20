/* eslint-disable prefer-destructuring */
export const MODE = process.env.MODE
export const USE_MOCK = process.env.USE_MOCK
export const COMPONENT_VERSION = process.env.COMPONENT_VERSION
export const NEXT_PUBLIC_MOCK_API_URL = process.env.NEXT_PUBLIC_MOCK_API_URL
export const API_URL = process.env.API_URL
export const WEB_DOMAIN = process.env.API_URL
export const MOCK_API_URL = process.env.MOCK_API_URL
export const IMAGE_API_DOMAIN = process.env.IMAGE_API_DOMAIN
export const COVER_API_DOMAIN = process.env.COVER_API_DOMAIN
export const IS_NODE = typeof window === 'undefined'
export const IS_CLIENT = !IS_NODE
export const IS_MOCKING = USE_MOCK === 'true'
export const IS_LOCAL = USE_MOCK === 'true'
