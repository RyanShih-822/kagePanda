import { Dialog, Button } from "../ui";
import ProductForm from "./ProdudctForm";

import useDialog from "../hooks/useDialog";

const buttonStyle =
  "m-3 cursor-pointer w-full d-flex justify-content-between align-items-center border-none bg-none ";

export default function ProductItem({ className, ...props }) {
  const { ref, onOpen, onClose } = useDialog();
  const { name, price, image, iceLevel, sugar, toppings } = props;

  return (
    <>
      <li className={className}>
        <Button onClick={onOpen} className={buttonStyle}>
          <div>
            <img className="bg-gray" src={image} alt="商品圖片" />
          </div>
          <h3 className="my-3 ">{name}</h3>
          <div className="d-flex">{parseInt(price)}</div>
        </Button>
      </li>
      <Dialog title={name} ref={ref} onClose={onClose}>
        <ProductForm
          name={name}
          price={price}
          image={image}
          iceLevel={iceLevel}
          sugar={sugar}
          toppings={toppings}
        />
      </Dialog>
    </>
  );
}
