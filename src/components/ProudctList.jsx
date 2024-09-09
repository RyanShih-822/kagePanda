import { Card } from "../ui";
import ProductItem from "./PrroductItem";

export default function ProductList({ title, productList, ...props }) {
  return (
    <Card {...props}>
      <h2 className="text-primary">{title}</h2>
      <ul className="py-4">
        {productList?.map(({ id, ...item }, index) => (
          <ProductItem
            key={id}
            className={index !== productList?.length - 1 ? "divide-line" : ""}
            {...item}
          />
        ))}
      </ul>
    </Card>
  );
}
