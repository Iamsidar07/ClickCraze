import { SearchResult } from "@/components/searchResult";
import { Category, Product } from "@/types";
import { getCategories, getProducts } from "@/sanity/actions";
import { Metadata, ResolvingMetadata } from "next";
import { getOrderQuery } from "@/utils";
type SearchParams = {
  query?: string;
  category?: string;
  price?: string;
  rating?: string;
  sort?: string;
};
type SearchPageProps = {
  searchParams: SearchParams;
};

export async function generateMetadata(
  { searchParams }: SearchPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { query, category, } = searchParams;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `Search ${query || category || ""} | Next.js Ecommerce`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query, category, price, rating, sort } = searchParams;
  const products: Product[] = await getProducts({
    id: "",
    category: category || "",
    order: sort ? getOrderQuery(sort) : "",
    query: query || "",
    rating: Number(rating || ""),
    price: Number(price || ""),
    priceMin: Number(price?.split("-")[0] || ""),
    priceMax: Number(price?.split("-")[1] || ""),
  });
  const categories: Category[] = await getCategories();

  return <SearchResult products={products} categories={categories} />;
};

export default SearchPage;
