import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/Product";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { api } from "@/models/api";

export default function ProductsPage() {
  const { productName } = useParams();
  const [product, setProduct] = useState(productName);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await api.get("/price/", {
          params: { q: product },
        });
        setSearchedProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, []);

  return (
    <Container className="my-16">
      <div className="flex items-center justify-between">
        <SectionHeading title="category" subTitle="Browser by Category" />

        <div className="mt-4 flex max-w-sm items-center space-x-2 overflow-hidden rounded-lg bg-[#018080] pr-2">
          <Input
            placeholder="Search products..."
            className="rounded-none rounded-br-full rounded-tr-full"
            value={product}
            onChange={() => {
              setProduct(event.target.value);
            }}
          />
          <button type="submit">
            <Icons.search className="size-7 stroke-white" />
          </button>
        </div>
      </div>
      <ProductGrid products={searchedProducts} />
    </Container>
  );
}
