import { Button } from "../ui";
import FormOptions from "./FormOptions";

export default function ProductForm({
  price,
  image,
  iceLevel,
  sugar,
  toppings,
}) {
  return (
    <>
      <div className="overflow-y-auto py-4">
        <picture className="w-full" style={{ height: "376px" }}>
          <img src={image} alt="商品預覽照片" />
        </picture>
        <div className="my-4 px-4 d-flex flex-column gap-3">
          <FormOptions optionTitle="溫度" optionDataArr={iceLevel} />
          <FormOptions optionTitle="甜度" optionDataArr={sugar} />
          <FormOptions optionTitle="加料" optionDataArr={toppings} />
        </div>
      </div>
      <footer className="border-t border-gray p-4 d-flex justify-content-between align-items-center">
        <div>
          <span>總金額：</span>
          <span>{price}元</span>
          <input type="number" />
        </div>
        <Button>加入購物車</Button>
      </footer>
    </>
  );
}
