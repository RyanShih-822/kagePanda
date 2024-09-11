import { Dialog } from "../ui";
import ProductForm from "./ProdudctForm";

import useDialog from "../hooks/useDialog";

export default function MenuDialog(name, price, image, optionConf) {
  const { ref, onOpen, onClose } = useDialog();

  return (
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
  );
}
