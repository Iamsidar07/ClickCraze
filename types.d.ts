import { PortableTextBlock } from "sanity"

type Rating = {
    rate: number,
    count: number,
}
export interface Product {
    _id: string,
    title: string,
    price: number,
    slug: string,
    description: PortableTextBlock,
    category: string,
    image: string,
    rating: Rating,
}
export interface ProductInCart extends Product {
    quantity: number
 }

export interface ProductPlaylist  {
    _id: string,
    title: string,
    products: Product[],
}
export interface Category {
    _id: string,
    title: string,
}