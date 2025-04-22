import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { FoodContextProvider } from "./store/food-context";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import CheckOutContent from "./components/CheckOutContent";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCOIsOpen, setModalCOIsOpen] = useState(false);

  function handleOpen() {
    setModalIsOpen(true);
  }

  function handleCancel() {
    setModalIsOpen(false);
  }
  function handleCOOpen() {
    setModalIsOpen(false);
    setModalCOIsOpen(true);
  }

  function handleCOCancel() {
    setModalCOIsOpen(false);
  }
  return (
    <FoodContextProvider>
      {modalIsOpen && (
        <Modal open={modalIsOpen} onClose={handleCancel}>
          <Cart onCancel={handleCancel} onCeckOutClick={handleCOOpen} />
        </Modal>
      )}
      {modalCOIsOpen && (
        <Modal open={modalCOIsOpen} onClose={handleCOCancel}>
          <CheckOutContent onCancel={handleCOCancel} />
        </Modal>
      )}
      <Header onCartClick={handleOpen}>ReactFood</Header>
      <main>
        <Meals />
      </main>
    </FoodContextProvider>
  );
}

export default App;
