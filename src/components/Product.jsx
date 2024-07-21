import { StarRating } from "src/components/StarRating";
import { Button } from "src/components/ui/Button";
import ShinyBorderContainer from "src/components/ui/ShinyBorderContainer";

import { cn, getPriceLevel } from "@/lib/utils";
import { useApiStore } from "@/models/api";

function ProductCard({ store, productName, description, price, ratings, imageSrc, link }) {
  return (
    <ShinyBorderContainer>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center space-x-8">
          <div className="h-52 w-36">
            <img src={imageSrc} alt={productName} className="h-full w-full object-contain" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold uppercase"> {productName}</h2>
            <p className="mb-3 mt-1 text-base font-medium">{store}</p>
            {/* <p>{description}</p> */}
            <div className="mt-4 flex items-center space-x-2 text-xs">
              <StarRating ratings={ratings} />
              <span className="font-semibold">({ratings})</span>
            </div>
          </div>
        </div>

        <Button className="w-full" priceLevel={getPriceLevel(price)}>
          ${price.toFixed(2)}
        </Button>
      </a>
    </ShinyBorderContainer>
  );
}

export default function ProductGrid({ className, products, isLoading }) {
  const { loading } = useApiStore();

  return (
    <div className={cn("mt-8 grid gap-8 px-8 sm:grid-cols-2 md:grid-cols-3", className)}>
      {loading
        ? Array.from({ length: 6 }, (_, index) => index + 1).map((_, idx) => (
            <div key={_} className="skeleton-box h-full w-full" />
          ))
        : products.map((product, index) =>
            loading ? (
              <div className="skeleton-box h-full w-full" />
            ) : (
              <ProductCard
                key={index}
                store={product.shop}
                productName={product.name}
                description={
                  product.description || "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz"
                }
                price={product.price}
                ratings={product.ratings || 3}
                link={product.link}
                imageSrc={product.image || "/product.png"}
              />
            ),
          )}
    </div>
  );
}
