import ProductList from "./ProudctList";
import Order from "./Order";
import useDrinkData from "../hooks/useDrinkData";

export default function Service() {
  const [drinkData] = useDrinkData();

  if (drinkData.length === 0) {
    return <div>loading</div>;
  }

  return (
    <section className="w-full d-flex justify-content-between align-items-start gap-4">
      {drinkData?.map(({ title, productList }) => (
        <ProductList
          key={title}
          className="flex-fill"
          title={title}
          productList={productList}
        />
      ))}
      <Order className="flex-fill" />
    </section>
  );
}
