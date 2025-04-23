import { createContext, useEffect, useState } from "react";
import { fetchMeals, postOrder } from "../http";

export const MealsContext = createContext({
  orders: null,
  orderTotCnt: 0,
  orderTotPrice: 0,
  addCard: (order) => {},
  plusOrderCnt: (id) => {},
  minusOrderCnt: (id) => {},
  updateOrder: (order) => {},
});

export function FoodContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  async function updateOrder(order) {
    const data = await postOrder(order);

    setOrders([]);

    return data;
  }
  function addCard(enteredOrderData) {
    const findOrderItem = orders.find(
      (item) => item.id === enteredOrderData.id
    );
    let newOrderItem = { ...enteredOrderData, cnt: 1 };
    if (findOrderItem) {
      setOrders((prevState) =>
        prevState.map((item) =>
          item.id === enteredOrderData.id
            ? {
                ...item,
                cnt: item.cnt + 1,
              }
            : item
        )
      );
    } else {
      setOrders((prevState) => [...prevState, newOrderItem]);
    }
  }

  function plusOrderCnt(id) {
    setOrders((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              cnt: item.cnt - 1 < 0 ? 0 : item.cnt + 1,
            }
          : item
      )
    );
  }
  function minusOrderCnt(id) {
    setOrders((prevState) =>
      prevState.reduce((acc, item) => {
        const newItem =
          item.id === id
            ? item.cnt - 1 < 1
              ? null
              : {
                  ...item,
                  cnt: item.cnt - 1 < 0 ? 0 : item.cnt - 1,
                }
            : item;

        if (newItem) return [...acc, newItem];
        return acc;
      }, [])
    );
  }
  const orderTotAmt = Array.isArray(orders)
    ? orders.reduce((acc, curr) => acc + curr.price * curr.cnt, 0).toFixed(2)
    : 0;
  const contextValue = {
    orders: orders,
    orderTotCnt: orders.length,
    orderTotAmt: orderTotAmt,
    addCard,
    plusOrderCnt,
    minusOrderCnt,
    updateOrder,
  };

  return <MealsContext value={contextValue}>{children}</MealsContext>;
}
