import { useState } from "react";
import { Dialog } from "../ui";

const productItemStyle =
  "d-flex justify-content-between align-items-center cursor-pointer p-3";

export default function ProductItem({
  className,
  productName,
  productPrice,
  image,
}) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <li
        className={`${productItemStyle} ${className}`}
        onClick={() => {
          setModal(true);
        }}
      >
        <div>
          <img src={image} alt="商品圖片" />
        </div>
        <h3 className="my-3 ">{productName}</h3>
        <div className="d-flex">{parseInt(productPrice)}</div>
      </li>
      {/* <Dialog
        openDal={modal}
        closeModel={() => {
          setModal(false);
        }}
        avsvsdvdsv
      ></Dialog> */}
    </>
  );
}
