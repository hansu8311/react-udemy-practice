import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { FoodContextProvider } from "./store/food-context";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import CheckOutContent from "./components/CheckOutContent";
import CheckOutComplete from "./components/CheckOutComplete";
import useFetch from "./hooks/useFetch";
import { fetchMeals } from "./http";
import Error from "./components/Error";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCOIsOpen, setModalCOIsOpen] = useState(false);
  const [modalCOCIsOpen, setModalCOCIsOpen] = useState(false);
  const { fetchedData, setFetchedData, isFetching, error } = useFetch(
    fetchMeals,
    []
  );

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
  function handleCOCOpen() {
    setModalCOIsOpen(false);
    setModalCOCIsOpen(true);
  }
  function handleCOCCancel() {
    setModalCOCIsOpen(false);
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
          <CheckOutContent onCancel={handleCOCancel} onOpen={handleCOCOpen} />
        </Modal>
      )}
      {modalCOCIsOpen && (
        <Modal open={modalCOCIsOpen} onClose={handleCOCCancel}>
          <CheckOutComplete onOk={handleCOCCancel} />
        </Modal>
      )}
      <Header onCartClick={handleOpen}>ReactFood</Header>
      <main>
        {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <Meals
            meals={fetchedData}
            fallbackText="no meals"
            isLoading={isFetching}
            loadingText="Fetching your meals..."
          />
        )}
      </main>
    </FoodContextProvider>
  );
}

export default App;
