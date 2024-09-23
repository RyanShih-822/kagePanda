import { Button } from "@/components/ui";
import { ProductForm } from "@/components/productForm";

import { useDialogContext } from "@/components/ui";

export default function ProductItem({
  className,
  id,
  name,
  price,
  image,
  optionConf,
}) {
  const { onOpen } = useDialogContext();

  function clickDialogHandler() {
    onOpen({
      title: name,
      component: (
        <ProductForm
          key={Math.random()}
          id={id}
          price={price}
          image={image}
          optionConf={optionConf}
          buttonText="加入購物車"
        />
      ),
    });
  }

  return (
    <li className={className}>
      <Button
        onClick={clickDialogHandler}
        className="btn-transparent m-3 p-4 w-full d-flex justify-content-between align-items-center gap-4"
      >
        <div className="basis-24">
          <img className="bg-gray" src={image} alt="商品圖片" />
        </div>
        <h3 className="basis-2/3 my-3 single-ellipsis">{name}</h3>
        <div className="basis-1/3 d-flex single-ellipsis">
          ${parseInt(price)}
        </div>
      </Button>
    </li>
  );
}
