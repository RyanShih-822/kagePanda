import { ENUM_DRINKDATA, ENUM_OrderDATA } from "../assets/drinkData.js";

const delayTime = 0;

function waitFor() {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

export async function getProductData() {
  await waitFor();

  if (!localStorage.getItem("drinkData")) {
    const [drinkArrData] = Object.values(ENUM_DRINKDATA);

    const editDrinkArrData = drinkArrData.map(({ productList, ...item }) => {
      const editProductList = productList.map(
        ({ iceLevel, sugar, toppings, ...item }) => {
          return {
            ...item,
            iceLevel: Object.entries(iceLevel),
            sugar: Object.entries(sugar),
            toppings: Object.entries(toppings),
          };
        }
      );

      return { ...item, productList: editProductList };
    });

    localStorage.setItem("drinkData", JSON.stringify(editDrinkArrData));
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

export async function updateOrderData({
  orderId,
  user,
  drinks,
  id,
  iceLevel,
  sugar,
  toppings,
}) {
  await waitFor();

  if (!localStorage.getItem("orderData")) {
    localStorage.setItem("orderData", JSON.stringify(ENUM_OrderDATA));

    const orderData = {
      orderId,
      user,
      drinks,
      id,
      iceLevel,
      sugar,
      toppings,
    };

    const DbOrderData = JSON.parse(localStorage.getItem("orderData"));
    DbOrderData.orderData.push(orderData);
    localStorage.setItem("orderData", JSON.stringify(DbOrderData));
  } else {
    const DbOrderData = JSON.parse(localStorage.getItem("orderData"));
    const isInDb = DbOrderData.find((item) => item.orderId === orderId);

    if (isInDb) {
      const newOrderData = DbOrderData.orderData.map((item) => {
        return item.orderId === orderId
          ? {
              orderId,
              user,
              drinks,
              id,
              iceLevel,
              sugar,
              toppings,
            }
          : item;
      });
    } else {
      DbOrderData.orderData.push({
        orderId,
        user,
        drinks,
        id,
        iceLevel,
        sugar,
        toppings,
      });
    }

    localStorage.setItem("orderData", JSON.stringify(DbOrderData));
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
