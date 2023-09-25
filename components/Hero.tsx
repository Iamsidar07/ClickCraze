import { Category, ProductPlaylist } from "@/types";
import { ProductCard } from ".";
import Banner from "./Banner";
import ViewAllButton from "./ViewAllButton";
import CategoryComponent from "./CategoryComponent";
interface HeroProps {
  productPlaylists: ProductPlaylist[];
  bannerImages: string[];
  categories: Category[];
}
const Hero = ({ productPlaylists, bannerImages, categories }: HeroProps) => {
  return (
    <main className="p-2 sm:p-4 max-w-[1600px] mx-auto gap-2 mt-[50px]">
      <CategoryComponent categories={categories}/>
      <Banner bannerImages={bannerImages} />
      {productPlaylists.map((productPlaylist, index) => (
        <section key={productPlaylist._id} className="mt-4">
          <div className="flex items-start justify-between">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
              {productPlaylist.title}
            </h2>
            <ViewAllButton value={productPlaylist.title} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 py-2 sm:py-4  3xl:grid-cols-5 ">
            {productPlaylist.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Hero;
