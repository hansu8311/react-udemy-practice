import { createContext, useState, useContext } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion-related ...");
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  function toggleItem(id) {
    setOpenItemId((prevId) => {
      return prevId === id ? null : id;
    });
  }

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }
  const contextValue = {
    openItemId,
    openItem,
    closeItem,
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
