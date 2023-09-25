
import { Hero } from '@/components'
import { getBannerImages, getCategories, getProductPlaylist } from '@/sanity/actions';
import { Category, ProductPlaylist } from '@/types';
export const revalidate = 900;
export default async function Home() {
  const productPlaylists: ProductPlaylist[] = await getProductPlaylist({
    title: "",
  });
  const categories: Category[] = await getCategories();

  const banner = await getBannerImages();

  return (
    <>
      <Hero productPlaylists={productPlaylists} categories={categories} bannerImages={banner[0].bannerImages} />
    </>
  )
}
