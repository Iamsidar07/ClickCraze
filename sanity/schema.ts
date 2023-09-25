import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
import productPlaylist from './schemas/productPlaylist'
import blockContent from './schemas/blockContent'
import category from "./schemas/category"
import banner from './schemas/bannerImages'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productPlaylist,blockContent,category,banner],
}
