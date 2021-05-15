import { configureStore } from "@reduxjs/toolkit";
import ReduxLogger from "redux-logger";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  middleware: [ReduxLogger, thunk],
});

export default store;
