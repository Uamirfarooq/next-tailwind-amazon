import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import data from '@/utils/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.product.find((x) => x.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to the Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li>category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.discription} </li>
          </ul>
        </div>
        <div className="card p-5 ">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
}
