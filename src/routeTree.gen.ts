/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as BlueprintRouteImport } from './routes/blueprint'
import { Route as FounderRouteImport } from './routes/founder'
import { Route as ProductsRouteImport } from './routes/products'
import { Route as ValuationRouteImport } from './routes/valuation'
import { Route as WriterRouteImport } from './routes/writer'
import { Route as MilitaryRouteImport } from './routes/military'
import { Route as AgricultureRouteImport } from './routes/agriculture'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const BlueprintRoute = BlueprintRouteImport.update({ id: '/blueprint', path: '/blueprint', getParentRoute: () => rootRouteImport } as any)
const FounderRoute = FounderRouteImport.update({ id: '/founder', path: '/founder', getParentRoute: () => rootRouteImport } as any)
const ProductsRoute = ProductsRouteImport.update({ id: '/products', path: '/products', getParentRoute: () => rootRouteImport } as any)
const ValuationRoute = ValuationRouteImport.update({ id: '/valuation', path: '/valuation', getParentRoute: () => rootRouteImport } as any)
const WriterRoute = WriterRouteImport.update({ id: '/writer', path: '/writer', getParentRoute: () => rootRouteImport } as any)
const MilitaryRoute = MilitaryRouteImport.update({ id: '/military', path: '/military', getParentRoute: () => rootRouteImport } as any)
const AgricultureRoute = AgricultureRouteImport.update({ id: '/agriculture', path: '/agriculture', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blueprint': typeof BlueprintRoute
  '/founder': typeof FounderRoute
  '/products': typeof ProductsRoute
  '/valuation': typeof ValuationRoute
  '/writer': typeof WriterRoute
  '/military': typeof MilitaryRoute
  '/agriculture': typeof AgricultureRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blueprint': typeof BlueprintRoute
  '/founder': typeof FounderRoute
  '/products': typeof ProductsRoute
  '/valuation': typeof ValuationRoute
  '/writer': typeof WriterRoute
  '/military': typeof MilitaryRoute
  '/agriculture': typeof AgricultureRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/blueprint': typeof BlueprintRoute
  '/founder': typeof FounderRoute
  '/products': typeof ProductsRoute
  '/valuation': typeof ValuationRoute
  '/writer': typeof WriterRoute
  '/military': typeof MilitaryRoute
  '/agriculture': typeof AgricultureRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blueprint' | '/founder' | '/products' | '/valuation' | '/writer' | '/military' | '/agriculture'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blueprint' | '/founder' | '/products' | '/valuation' | '/writer' | '/military' | '/agriculture'
  id: '__root__' | '/' | '/blueprint' | '/founder' | '/products' | '/valuation' | '/writer' | '/military' | '/agriculture'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlueprintRoute: typeof BlueprintRoute
  FounderRoute: typeof FounderRoute
  ProductsRoute: typeof ProductsRoute
  ValuationRoute: typeof ValuationRoute
  WriterRoute: typeof WriterRoute
  MilitaryRoute: typeof MilitaryRoute
  AgricultureRoute: typeof AgricultureRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/blueprint': { id: '/blueprint'; path: '/blueprint'; fullPath: '/blueprint'; preLoaderRoute: typeof BlueprintRouteImport; parentRoute: typeof rootRouteImport }
    '/founder': { id: '/founder'; path: '/founder'; fullPath: '/founder'; preLoaderRoute: typeof FounderRouteImport; parentRoute: typeof rootRouteImport }
    '/products': { id: '/products'; path: '/products'; fullPath: '/products'; preLoaderRoute: typeof ProductsRouteImport; parentRoute: typeof rootRouteImport }
    '/valuation': { id: '/valuation'; path: '/valuation'; fullPath: '/valuation'; preLoaderRoute: typeof ValuationRouteImport; parentRoute: typeof rootRouteImport }
    '/writer': { id: '/writer'; path: '/writer'; fullPath: '/writer'; preLoaderRoute: typeof WriterRouteImport; parentRoute: typeof rootRouteImport }
    '/military': { id: '/military'; path: '/military'; fullPath: '/military'; preLoaderRoute: typeof MilitaryRouteImport; parentRoute: typeof rootRouteImport }
    '/agriculture': { id: '/agriculture'; path: '/agriculture'; fullPath: '/agriculture'; preLoaderRoute: typeof AgricultureRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  BlueprintRoute,
  FounderRoute,
  ProductsRoute,
  ValuationRoute,
  WriterRoute,
  MilitaryRoute,
  AgricultureRoute,
}
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
