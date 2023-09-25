import { ProductInfoCard, RelatedProducts } from "@/components";
import { Product } from "@/types";
import { getProducts } from "@/sanity/actions";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
type ProductInfoPageProps = {
  params: { productId: string };
};

export async function generateMetadata(
  { params }: ProductInfoPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const productId = params.productId;
  const product = await getProducts({
    id: productId,
  });
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

const ProductInfoPage = async ({ params }: ProductInfoPageProps) => {
  const { productId } = params;
  const product: Product = await getProducts({
    id: productId,
  });
  const relatedProducts: Product[] = await getProducts({
    category: product.category,
  });
  return (
    <main className="p-3 sm:p-8 max-w-[1600px] mx-auto min-h-screen">
      <ProductInfoCard product={product} />
      <h1 className="my-12 font-bold text-2xl sm:text-4xl">Related Products</h1>
      {relatedProducts.length === 0 ? (
        <p>No any related products</p>
      ) : (
        <RelatedProducts products={relatedProducts} />
      )}
    </main>
  );
};

export default ProductInfoPage;
