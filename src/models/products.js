import { ENUM_DRINKDATA, ENUM_OrderDATA } from "../assets/drinkData.js";

const delayTime = 500;

function waitFor() {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

function findOrderData(orderId) {
  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];

  const orderIndex = DbOrderData?.findIndex(
    (item) => item?.orderId === orderId
  );

  return orderIndex;
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
  user,
  comment,
}) {
  await waitFor();

  const orderData = {
    orderId,
    drinkId,
    orderConfig,
    numbers,
    user,
    comment,
  };

  const orderIndex = findOrderData(orderId);

  if (orderIndex !== -1) {
    return {
      status: "failed",
      message: "The data is already in the DB",
    };
  }

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
  const DbDrinkData = JSON.parse(localStorage.getItem("drinkData")) || [];
  const chooseDrinkData = DbDrinkData?.map((item) => item.productList)
    ?.flat()
    ?.find((product) => product.id === drinkId);

  const { id, ...otherDrinkData } = chooseDrinkData;

  const updateData = {
    ...otherDrinkData,
    ...orderData,
  };
  DbOrderData.push(updateData);
  localStorage.setItem("orderData", JSON.stringify(DbOrderData));

  return {
    status: "success",
    message: "successfully create order data",
    data: updateData,
  };
}

export async function updateOrderData({
  orderId,
  drinkId,
  orderConfig,
  numbers,
  user,
  comment,
}) {
  await waitFor();

  const orderData = {
    orderId,
    drinkId,
    orderConfig,
    numbers,
    user,
    comment,
  };

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
  const orderIndex = findOrderData(orderId);

  if (orderIndex === -1) {
    return {
      status: "failed",
      message: "The data is not in the DB yet",
    };
  }

  DbOrderData[orderIndex] = { ...DbOrderData[orderIndex], ...orderData };
  const updateData = DbOrderData[orderIndex];

  localStorage.setItem("orderData", JSON.stringify(DbOrderData));

  return {
    status: "success",
    message: "successfully update order data",
    data: updateData,
  };
}

export async function deleteOrderData(orderId) {
  await waitFor();

  const DbOrderData = JSON.parse(localStorage.getItem("orderData"));

  const editData = DbOrderData.filter((item) => item.orderId !== orderId);

  localStorage.setItem("orderData", JSON.stringify(editData));

  return {
    status: "success",
    message: "successfully delete order data",
  };
}
