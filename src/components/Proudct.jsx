import Card from "../ui/Card";
import Money from "../assets/money.svg?react";

export default function Product({ drinkData, ...props }) {
  const divideLine = "border-dark border-b border-gray";

  return (
    <>
      {drinkData?.map(([productName, productArr]) => (
        <Card key={productName} {...props}>
          <h2>{productName}</h2>
          <ul>
            {productArr?.map((product, index) => (
              <li
                key={product?.id}
                className={`d-flex justify-content-between ${
                  index !== productArr?.length - 1 && divideLine
                }`}
              >
                <h3 className="my-3">{product?.name}</h3>
                <div className="d-flex">
                  <Money width={14} height={14} />
                  {parseInt(product?.price)}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </>
  );
}
