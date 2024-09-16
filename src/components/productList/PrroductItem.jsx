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
          name={name}
          price={price}
          image={image}
          optionConf={optionConf}
        />
      ),
    });
  }

  return (
    <>
      <li className={className}>
        <Button
          onClick={clickDialogHandler}
          className="btn-transparent m-3 p-4  w-full d-flex justify-content-between align-items-center"
        >
          <div>
            <img className="bg-gray" src={image} alt="商品圖片" />
          </div>
          <h3 className="my-3 ">{name}</h3>
          <div className="d-flex">${parseInt(price)}</div>
        </Button>
      </li>
    </>
  );
}
