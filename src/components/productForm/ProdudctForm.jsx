import { Button, Textarea, Input } from "@/components/ui";
import { InputNumber } from "@/components/inutNumber";
import ProdouctRadios from "./ProdouctRadios";

import userProductForm from "./useProductForm";

const defaultConfigOption = {
  iceLevels: "",
  sugar: "",
  toppings: "",
};

export default function ProductForm({
  id,
  price,
  image,
  optionConf,
  values = 1,
  orderConfig = { ...defaultConfigOption },
  orderId = crypto.randomUUID(),
  user = "",
  comment = "",
}) {
  const {
    formData,
    isValidOption,
    incrementHandler,
    decrementHandler,
    changeFormDataHandler,
    addCartHandler,
  } = userProductForm({
    orderId,
    drinkId: id,
    user: user,
    comment: comment,
    numbers: values,
    orderConfig,
  });

  return (
    <form
      className="overflow-hidden h-full d-flex flex-column"
      onSubmit={addCartHandler}
    >
      <div className="overflow-y-auto py-4 px-4">
        <picture className="w-full px-" style={{ height: "376px" }}>
          <img src={image} alt="商品預覽照片" />
        </picture>

        <div className="my-4 d-flex flex-column gap-3">
          {optionConf?.map((item) => (
            <ProdouctRadios
              key={item.configId}
              id={item.configId}
              optionTitle={item.title}
              optionDataArr={item.dataArr}
              updateConfigOptionHandler={changeFormDataHandler}
              orderConfig={formData?.orderConfig}
            />
          ))}
        </div>

        <div>
          <label htmlFor="comment">
            <h3>餐點註解</h3>
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={formData?.comment}
            onChange={changeFormDataHandler}
          />
        </div>

        <div>
          <label htmlFor="user">
            <h3>訂購人姓名</h3>
          </label>
          <Input
            id="user"
            name="user"
            required
            value={formData?.user}
            onChange={changeFormDataHandler}
          />
        </div>
      </div>

      <footer className="border-t border-gray p-4 d-flex justify-content-between align-items-center">
        <div>
          <span>總金額：</span>
          <span>{price * formData?.numbers}元</span>
          <InputNumber
            value={formData?.numbers}
            min={1}
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        </div>
        <Button
          type="submit"
          disabled={!isValidOption}
          className={!isValidOption ? "" : "btn-primary"}
        >
          {"加入購物車"}
        </Button>
      </footer>
    </form>
  );
}
