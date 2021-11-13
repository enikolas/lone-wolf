import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import * as wsClient from "../client/websocket-client";
import { players } from "../store/player";
import reducer from "../store/reducer";

const remoteMiddleware =
  () => (next: any) => (action: Record<string, unknown>) => {
    // If the action comes from the server then its payload is another action. Send that onwards
    if (action.type === "fromServer") {
      next(action.payload);
      return;
    }
    wsClient.sendObject(action);
  };

export const store = configureStore({
  reducer,
  middleware: [remoteMiddleware],
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
