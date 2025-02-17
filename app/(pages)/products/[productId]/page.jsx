import { getProduct } from '@/lib/firestore/products/read_server';
;
import Photos from './components/Photos';
import Details from './components/Details';
import Description from './components/Description';
import Reviews from './components/Reviews';
import RelatedProducts from './components/RelatedProducts';

async function page({ params }) {
    const { productId } = params;
    const product = await getProduct({ id: productId });

    return (
        <main className="p-5 md:p-10 mt-10 max-w-6xl mx-auto">
            {/* Photo & Details Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Product Images */}
                <div className="flex justify-center">
                    <Photos imageList={[product?.featureImageURL, ...(product?.imageList ?? [])]} />
                </div>

                {/* Right: Product Details */}
                <div>
                    <Details product={product} />
                </div>
            </section>

            {/* Description & Reviews Section */}
            <section>
                <Description product={product} />
            </section>
            {/* Prodcuts Review Section */}
            <section>
                <Reviews productId={product} />
            </section>

            {/* Related Products Section */}
            <section className="mt-10">
                <RelatedProducts categoryId={product?.categoryId} />
            </section>
        </main>
    );
}

export default page;
