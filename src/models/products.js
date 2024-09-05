import { ENUM_DRINKDATA, ENUM_OrderDATA } from "../assets/drinkData.js";

const delayTime = 2000;

function waitFor() {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

export async function getProductData() {
  await waitFor();

  if (!localStorage.getItem("drinkData")) {
    localStorage.setItem("drinkData", JSON.stringify(ENUM_DRINKDATA));
  }

  return {
    status: "success",
    data: JSON.parse(localStorage.getItem("drinkData")),
  };
}

export async function getOrderData() {
  await waitFor();

  if (!localStorage.getItem("orderData")) {
    localStorage.setItem("orderData", JSON.stringify(ENUM_OrderDATA));
  }

  return {
    status: "success",
    data: JSON.parse(localStorage.getItem("orderData")),
  };
}

export async function updateOrderData({ orderId, user, meals, id, iceLevel }) {
  await waitFor();

  if (!localStorage.getItem("orderData")) {
    localStorage.setItem("orderData", JSON.stringify(ENUM_OrderDATA));

    const orderData = {
      orderId,
      user,
      meals,
      id,
      iceLevel,
    };

    const DbOrderData = JSON.parse(localStorage.getItem("orderData"));
    DbOrderData.orderData.push(orderData);
    localStorage.setItem("orderData", JSON.stringify(DbOrderData));
  } else {
    const DbOrderData = JSON.parse(localStorage.getItem("orderData"));
    DbOrderData.orderData.map((item) => {
      return item.orderId === orderId
        ? {
            orderId,
            user,
            meals,
            id,
            iceLevel,
          }
        : item;
    });
  }

  return {
    status: "success",
    data: "successfully update order data",
  };
}

export async function deleteOrderData(orderId) {
  await waitFor();

  const DbOrderData = JSON.parse(localStorage.getItem("orderData"));
  const editData = DbOrderData.orderData.filiter((item) => {
    item.orderId !== orderId;
  });
  localStorage.setItem("orderItem", editData);

  return {
    status: "success",
    data: "successfully delete order data",
  };
}
