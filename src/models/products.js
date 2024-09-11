import { ENUM_DRINKDATA, ENUM_OrderDATA } from "../assets/drinkData.js";

const delayTime = 1000;

function waitFor() {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

export async function getProductData() {
  await waitFor();

  if (!localStorage.getItem("drinkData")) {
    const [drinkArrData] = Object.values(ENUM_DRINKDATA);

    localStorage.setItem("drinkData", JSON.stringify(drinkArrData));
  }

  return {
    status: "success",
    data: JSON.parse(localStorage.getItem("drinkData")),
  };
}

export async function getOrderData() {
  await waitFor();

  if (!localStorage.getItem("orderData")) {
    const [orderArrData] = Object.values(ENUM_OrderDATA);

    localStorage.setItem("orderData", JSON.stringify(orderArrData));
  }

  console.log(JSON.parse(localStorage.getItem("orderData")));

  return {
    status: "success",
    data: JSON.parse(localStorage.getItem("orderData")),
  };
}

export async function createOrderData({
  orderId,
  drinkId,
  orderConfig,
  numbers,
}) {
  await waitFor();

  const orderData = {
    orderId,
    drinkId,
    orderConfig,
    numbers,
  };

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
  const DbDrinkData = JSON.parse(localStorage.getItem("drinkData"));

  const chooseDrinkData = DbDrinkData?.map((item) => item.productList)
    .flat()
    .find((product) => product.id === drinkId);

  const { id, ...otherDrinkData } = chooseDrinkData;

  DbOrderData.push({
    ...otherDrinkData,
    ...orderData,
  });

  localStorage.setItem("orderData", JSON.stringify(DbOrderData));

  return {
    status: "success",
    data: "successfully update order data",
  };
}

export async function editOrderData({
  orderId,
  user,
  drinks,
  id,
  iceLevel,
  sugar,
  toppings,
}) {
  await waitFor();

  const orderData = {
    orderId,
    user,
    drinks,
    id,
    iceLevel,
    sugar,
    toppings,
  };

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];

  const orderIndex = DbOrderData?.findIndex(
    (item) => item?.orderId === orderId
  );

  DbOrderData[orderIndex] = orderData;

  localStorage.setItem("orderData", JSON.stringify(DbOrderData));

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
