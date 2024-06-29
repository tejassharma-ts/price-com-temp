import { cn } from "src/lib/utils";
import Container from "src/components/ui/Container";
import { StarRating } from "src/components/StarRating";
import { Button } from "src/components/ui/Button";
import ShinyBorderContainer from "src/components/ui/ShinyBorderContainer";
import { Icons } from "src/components/ui/Icons";

function Card({ label, iconName }) {
  const Icon = Icons[iconName];
  return (
    <div className="flex flex-1 flex-col items-center space-y-4 rounded-lg border-2 border-[#29C2C2] px-20 py-10 shadow-md">
      <div className="flex size-24 justify-center">{Icon && <Icon />}</div>
      <h3 className="text-lg font-semibold">{label}</h3>
    </div>
  );
}

function getPriceLevel(price) {
  if (price < 5) return "low";
  if (price < 6) return "medium";
  return "high";
}

function ProductCard({ store, productName, description, price, ratings, imageSrc }) {
  return (
    <ShinyBorderContainer>
      <div className="flex items-center space-x-8">
        <div className="h-52 w-36">
          <img src={imageSrc} alt={productName} className="h-full w-full" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold uppercase">{store}</h2>
          <p className="mb-3 mt-1 text-base font-medium">{productName}</p>
          <p>{description}</p>
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

function Section({ className, children }) {
  return <section className={cn("border-b py-16", className)}>{children}</section>;
}

// Fake data
const products = [
  {
    store: "Amazon",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 4.02,
    ratings: 5,
    imageSrc: "/product.png",
  },
  {
    store: "Walmart",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 4.28,
    ratings: 4.5,
    imageSrc: "/product.png",
  },
  {
    store: "Target.com",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 4.48,
    ratings: 4,
    imageSrc: "/product.png",
  },
  {
    store: "Flipkart",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 4.68,
    ratings: 4.7,
    imageSrc: "/product.png",
  },
  {
    store: "Country Delight",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 5.48,
    ratings: 3.9,
    imageSrc: "/product.png",
  },
  {
    store: "BigBasket",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 6.1,
    ratings: 3.5,
    imageSrc: "/product.png",
  },
  {
    store: "Creamline Dairy",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 5.78,
    ratings: 4.2,
    imageSrc: "/product.png",
  },
  {
    store: "Pravarshe Industries",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 6.48,
    ratings: 3.8,
    imageSrc: "/product.png",
  },
  {
    store: "Heritage Foods",
    productName: "Fairlife",
    description: "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz",
    price: 6.82,
    ratings: 3.9,
    imageSrc: "/product.png",
  },
];

function App() {
  const cards = ["Food", "Beverage", "Milk"];
  return (
    <Container>
      <Section>
        <div className="mb-4 flex space-x-2">
          <span className="block h-8 w-4 rounded-sm bg-[#017F7F]" />
          <h2 className="text-lg font-medium text-[#017F7F]">Categories</h2>
        </div>
        <h1 className="text-2xl font-semibold">Browser by Category</h1>
        <div className="mt-8 flex justify-between gap-x-20">
          {cards.map((label, index) => (
            <Card key={index} label={label} iconName={label.toLowerCase()} />
          ))}
        </div>
      </Section>
      <Section>
        <div className="mb-4 flex space-x-2">
          <span className="block h-8 w-4 rounded-sm bg-[#017F7F]" />
          <h2 className="text-lg font-medium text-[#017F7F]">Popular</h2>
        </div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="mt-8 grid grid-cols-3 justify-items-center gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              store={product.store}
              productName={product.productName}
              description={product.description}
              price={product.price}
              ratings={product.ratings}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}

export default App;
