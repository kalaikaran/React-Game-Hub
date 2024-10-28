import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store.ts";
// import App from "./App.tsx";
import Test from "./components/Test.js";
import "./index.css";
import { Provider } from "react-redux";
import ListTodo from "./components/ListTodo.tsx";
import AddTodo from "./components/AddTodo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Test />
      <AddTodo />
      <ListTodo />
    </Provider>
  </StrictMode>
);
