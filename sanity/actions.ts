import { groq } from "next-sanity"
import { client } from "./lib/client"
import { makeGroqQuery } from "./utils"

interface GetProductParams {
    id?: string;
    query?: string;
    rating?: number;
    category?: string;
    price?: number;
    order?: string;
    priceMin?: number;
    priceMax?: number;
}


export const getProducts = async ({ id, category, order, query, price, priceMax, priceMin, rating, }: GetProductParams) => {

    try {
        const products = client.fetch(groq`${makeGroqQuery({
            type: "product",
            id,
            category,
            query,
            price,
            priceMax,
            priceMin,
            rating
        })}${order ? `| order(${order})` : ""}{
                _id,
                title,
                description,
                "category":category->title,
                "image": image.asset->url,
                price,
                "slug":slug.current,
                rating,
        }${id ? "[0]" : "[0...20]"}`);
        return products;
    } catch (error: any) {
        console.log("SOMETHING WENT WRONG: ", error.message)
    }
}

export const getProductPlaylist = async ({ title }: { title?: string }) => {
    try {
        const products = client.fetch(groq`${makeGroqQuery({
            type: "productPlaylist",
            title,
        })
            }{
            _id,
            title,
            products[${title ? "" : "0...15"}]-> {
            _id,
            title,
            "image": image.asset -> url,
            price,
            rating,
        }
        }${title ? "[0]" : "[0...20]"}`);
        return products;
    } catch (error: any) {
        console.log("SOMETHING WENT WRONG: ", error.message)
    }
}

export const getCategories = async () => {
    try {
        const categories = client.fetch(groq`*[_type=="categoryItem"]{
                _id,
                title,
                 }`);
        return categories;
    } catch (error: any) {
        console.log("SOMETHING WENT WRONG: ", error.message)
    }
}

export const getBannerImages = async () => {
    try {
        const banner = client.fetch(groq`*[_type=="banner"]{
                _id,
                "bannerImages":bannerImages[0...5].asset->url,
                 }`);
        return banner;
    } catch (error: any) {
        console.log("SOMETHING WENT WRONG: ", error.message)
    }
}