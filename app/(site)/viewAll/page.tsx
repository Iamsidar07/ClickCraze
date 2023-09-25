import { ProductPlaylist } from "@/types";
import { getProductPlaylist } from "@/sanity/actions";
import { Metadata, ResolvingMetadata } from "next";
import { ProductCard } from "@/components";
type SearchParams = {
  productPlaylist?: string;
};
type ViewAllPageProps = {
  searchParams: SearchParams;
};

export async function generateMetadata(
  { searchParams }: ViewAllPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { productPlaylist } = searchParams;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${productPlaylist} | View all |  Next.js Ecommerce`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
const ViewAllPage = async ({ searchParams }: ViewAllPageProps) => {
  const { productPlaylist } = searchParams;
  const productsPlaylists: ProductPlaylist = await getProductPlaylist({
    title: productPlaylist || "",
  });

  return (
    <main className="p-2 sm:p-4 max-w-[1600px] mx-auto mt-12 sm:mt-24">
      <h1 className="text-2xl font-bold sm:text-4xl my-3">
        Showing All {productPlaylist}
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:gap-6 3xl:grid-cols-5">
        {productsPlaylists.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ViewAllPage;
