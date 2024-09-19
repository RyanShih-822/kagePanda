import { ENUM_DRINK_DATA, ENUM_ORDER_DATA } from "../assets/drinkData.js";

const delayTime = 500;

function waitFor() {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

function getChooseDrinkData(drinkId) {
  const DbDrinkData = JSON.parse(localStorage.getItem("drinkData")) || [];
  return DbDrinkData?.map((item) => item.productList)
    ?.flat()
    ?.find((product) => product.id === drinkId);
}

function editOrderDataHandler(drinkId, orderConfig) {
  const chooseDrinkData = getChooseDrinkData(drinkId);

  console.log("chooseDrinkData", chooseDrinkData);
  const { id, optionConf, ...otherDrinkData } = chooseDrinkData;
  const defaultEditOrderConf = {
    iceLevels: {
      title: "",
      name: "",
    },
    sugar: {
      title: "",
      name: "",
    },
    toppings: {
      title: "",
      name: "",
    },
  };

  const editOrderConf = optionConf?.reduce((acc, curr) => {
    const { title, name } = curr.dataArr.find(
      (item) => item.title === orderConfig[curr?.configId]
    );

    acc[curr?.configId].title = title;
    acc[curr?.configId].name = name;

    return acc;
  }, defaultEditOrderConf);

  return {
    optionConf,
    ...otherDrinkData,
    orderConfig: editOrderConf,
  };
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
    const [drinkArrData] = Object.values(ENUM_DRINK_DATA);

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
    const [orderArrData] = Object.values(ENUM_ORDER_DATA);

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

  const orderIndex = findOrderData(orderId);

  if (orderIndex !== -1) {
    return {
      status: "failed",
      message: "The data is already in the DB",
    };
  }

  const orderData = {
    orderId,
    drinkId,
    numbers,
    user,
    comment,
  };

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
  const editOrderData = editOrderDataHandler(drinkId, orderConfig);
  const updateData = {
    ...orderData,
    ...editOrderData,
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
  console.log("drinkId", drinkId);
  console.log("orderId", drinkId);
  await waitFor();

  const orderIndex = findOrderData(orderId);

  if (orderIndex === -1) {
    return {
      status: "failed",
      message: "The data is not in the DB yet",
    };
  }

  const orderData = {
    orderId,
    drinkId,
    numbers,
    user,
    comment,
  };

  const editOrderData = editOrderDataHandler(drinkId, orderConfig);
  const updateData = {
    ...orderData,
    ...editOrderData,
  };

  const DbOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
  DbOrderData[orderIndex] = updateData;

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
