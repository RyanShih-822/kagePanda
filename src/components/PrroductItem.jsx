import { Dialog, Button } from "../ui";
import ProductForm from "./ProdudctForm";

import useDialog from "../hooks/useDialog";

export default function ProductItem({
  className,
  id,
  name,
  price,
  image,
  optionConf,
}) {
  const { ref, onOpen, onClose } = useDialog();

  return (
    <>
      <li className={className}>
        <Button
          onClick={onOpen}
          className="btn-transparent m-3 p-4  w-full d-flex justify-content-between align-items-center"
        >
          <div>
            <img className="bg-gray" src={image} alt="商品圖片" />
          </div>
          <h3 className="my-3 ">{name}</h3>
          <div className="d-flex">{parseInt(price)}</div>
        </Button>
      </li>

      <Dialog title={name} ref={ref} onClose={onClose}>
        <ProductForm
          id={id}
          name={name}
          price={price}
          image={image}
          optionConf={optionConf}
          onClose={onClose}
        />
      </Dialog>
    </>
  );
}
