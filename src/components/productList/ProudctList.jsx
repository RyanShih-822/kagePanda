import { Card } from "@/components/ui";
import ProductItem from "./PrroductItem";

export default function ProductList({ title, productList, className }) {
  return (
    <Card className={className}>
      <h2 className="text-primary">{title}</h2>
      <ul className="py-4">
        {productList?.map(({ id, ...item }, index) => (
          <ProductItem
            key={id}
            className={index !== productList?.length - 1 ? "border-b-gray" : ""}
            id={id}
            {...item}
          />
        ))}
      </ul>
    </Card>
  );
}
