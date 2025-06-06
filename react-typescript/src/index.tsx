import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodosContextProvider } from "./store/todos-context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
