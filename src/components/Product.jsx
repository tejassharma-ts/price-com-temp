import { StarRating } from "src/components/StarRating";
import { Button } from "src/components/ui/Button";
import ShinyBorderContainer from "src/components/ui/ShinyBorderContainer";

import { cn, getPriceLevel } from "@/lib/utils";

function ProductCard({ store, productName, description, price, ratings, imageSrc }) {
  return (
    <ShinyBorderContainer>
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
    </ShinyBorderContainer>
  );
}

export default function ProductGrid({ className, products }) {
  return (
    <div className={cn("mt-8 grid grid-cols-3 gap-8", className)}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          store={product.shop}
          productName={product.name}
          description={product.description || "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz"}
          price={product.price}
          ratings={product.ratings || 3}
          imageSrc={product.image || "/product.png"}
        />
      ))}
    </div>
  );
}
