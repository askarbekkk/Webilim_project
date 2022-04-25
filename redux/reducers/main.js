import { createSlice } from "@reduxjs/toolkit";
import { LOCALES } from "../../intl/locales";
import Cookies from "js-cookie";

const initialState = {
  access_token: Cookies.get("access") || null,
  refresh_token: Cookies.get("refresh") || null,
  user_id: Cookies.get("user_id"),
  locale: LOCALES.KYRGYZ,
};

const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
    },
    setAccessToken(state, action) {
      state.access_token = Cookies.set(
        "access",
        (action.payload)
      );
    },
    setRefreshToken(state, action) {
      state.refresh_token = Cookies.set(
        "refresh",
        (action.payload)
      );
    },
    setUserId(state, action) {
      state.user_id = Cookies.set("user_id",action.payload);
    },
    clear(state, _action) {
      state.access_token = null;
      state.refresh_token = null;
      state.user_id = null;
    },
  },
});

export const { setLocale, clear, setAccessToken, setRefreshToken, setUserId } =
  main.actions;

export default main.reducer;
