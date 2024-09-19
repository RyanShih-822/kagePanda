export const ENUM_ICE = [
  { title: "normalIce", name: "正常冰" },
  { title: "lessIce", name: "少冰" },
  { title: "lightIce", name: "微冰" },
  { title: "noIce", name: "去冰" },
  { title: "normal", name: "常溫" },
  { title: "warm", name: "溫" },
  { title: "hot", name: "熱" },
];

export const ENUM_SUGAR = [
  { title: "verySweet", name: "多糖" },
  { title: "sweet", name: "標準甜" },
  { title: "lessSweet", name: "八分糖" },
  { title: "halfSweet", name: "半糖" },
  { title: "lightSweet", name: "微糖" },
  { title: "veryLightSweet", name: "一分糖" },
  { title: "noSugar", name: "無糖" },
];

export const ENUM_TOPPINGS = [
  { title: "tapiocaPearls", name: "白玉珍珠" },
  { title: "coconutJelly", name: "椰果" },
  { title: "basilSeeds", name: "羅勒子" },
  { title: "aiyuJelly", name: "愛玉【不可加熱飲】" },
  { title: "crystalBalls", name: "晶球啵啵【不可加熱飲】" },
  { title: "bobaPearls", name: "波霸珍珠" },
];

export const ENUM_DRINK_DATA = {
  drinkData: [
    {
      title: "純茶",
      productList: [
        {
          id: "plainTea001",
          name: "高山文山清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56d50_dRCuEvtA.png",
          price: 35,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea002",
          name: "決明淡雅紅茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e53f56_2XlxcwY7.jpg",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea003",
          name: "熬香純火麥茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56e7f_ul6DAesX.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea004",
          name: "茉莉朝露綠茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56c36_EjITfB0A.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea005",
          name: "山韻不知春",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56e98_bKmnUqXE.png",
          price: 45,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea006",
          name: "純火冬瓜茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56bd1_MOTzytbE.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea007",
          name: "伯爵醇厚紅茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56d9b_kIqOnoeP.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea008",
          name: "深焙鐵韻烏龍",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e7cec8_J4f0ptX3.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea009",
          name: "凍香烏龍清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e56ed7_E5eWoiQg.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea010",
          name: "潤甜鐵韻冬香",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e7ce90_Z6oJ5sjp.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "plainTea011",
          name: "拾緣麥香綠茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e7ce90_Z6oJ5sjp.png",
          price: 30,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
      ],
    },
    {
      title: "新鮮茶",
      productList: [
        {
          id: "freshTea001",
          name: "紅甘蔗清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e58070_P4EOC5ZM.png",
          price: 60,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea002",
          name: "冬瓜檸檬",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57e9b_YEzVrDJK.png",
          price: 45,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea003",
          name: "柚香烏龍清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57fbe_13BrHTeA.png",
          price: 55,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea004",
          name: "柚香綠茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57f68_buqf1G5p.png",
          price: 55,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea005",
          name: "鮮檸檬清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57ee7_GrQz07LR.png",
          price: 55,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea006",
          name: "貴妃蜜百香",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e58011_lqf3PCnV.png",
          price: 60,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea007",
          name: "柳橙佐百香",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e580a6_ShsikJQX.png",
          price: 65,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea008",
          name: "冬瓜麥茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57e5e_hOuTFgvk.png",
          price: 40,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
        {
          id: "freshTea009",
          name: "冬瓜清茶",
          image:
            "https://cdn-order-v3.nidin.shop/product/images/6/b6_65e57f1f_sIRAc5UC.png",
          price: 40,
          optionConf: [
            { configId: "iceLevels", title: "溫度", dataArr: ENUM_ICE },
            { configId: "sugar", title: "甜度", dataArr: ENUM_SUGAR },
            { configId: "toppings", title: "加料", dataArr: ENUM_TOPPINGS },
          ],
        },
      ],
    },
  ],
};

export const ENUM_ORDER_DATA = {
  orderData: [],
};
