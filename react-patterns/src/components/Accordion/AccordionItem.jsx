import { createContext, useContext } from "react";

const AccordionItmeContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItmeContext);

  if (!ctx) {
    throw new Error("Accordion-related ...");
  }

  return ctx;
}
export default function AccordionItem({ className, children, id }) {
  return (
    <AccordionItmeContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItmeContext.Provider>
  );
}
