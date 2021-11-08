import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConditionalKeys } from "type-fest";
interface LoneWolfState {
  gold: number;
  endurancePoints: number;
  endurancePointsMax: number;
  disciplines: string[];
  backpack: string[];
  weapons: string[];
}
const initialState: LoneWolfState = {
  gold: 12,
  endurancePoints: 23,
  endurancePointsMax: 23,
  disciplines: ["Camouflage", "Hunting"],
  backpack: ["Meal", "Meal", "Friggin potion", "Something else"],
  weapons: ["chopper", "stabber"],
};

const adder =
  (field: ConditionalKeys<LoneWolfState, string[]>) =>
  (state: LoneWolfState, action: PayloadAction<string>) => {
    state[field].push(action.payload);
  };
const remover =
  (field: ConditionalKeys<LoneWolfState, string[]>) =>
  (state: LoneWolfState, action: PayloadAction<string>) => {
    const itemIndex = state[field].findIndex((item) => item === action.payload);
    if (itemIndex === -1) return;

    state[field].splice(itemIndex, 1);
  };

export const loneWolf = createSlice({
  name: "loneWolf",
  initialState,
  reducers: {
    overwriteLonewolf: (_state, action: PayloadAction<LoneWolfState>) => {
      return action.payload;
    },
    reset: () => initialState,
    addGold: (state, action: PayloadAction<number>) => {
      state.gold += action.payload;
      if (state.gold > 50) state.gold = 50;
      if (state.gold < 0) state.gold = 0;
    },
    addEndurancePoints: (state, action: PayloadAction<number>) => {
      state.endurancePoints += action.payload;
      if (state.endurancePoints > state.endurancePointsMax)
        state.endurancePoints = state.endurancePointsMax;
      if (state.endurancePoints < 0) state.endurancePoints = 0;
    },
    addToBackpack: adder("backpack"),
    removeFromBackpack: remover("backpack"),
    addWeapon: adder("weapons"),
    removeWeapon: remover("weapons"),
    addDiscipline: adder("disciplines"),
    removeDiscipline: remover("disciplines"),
  },
});

export const {
  overwriteLonewolf,
  reset,
  addGold,
  addEndurancePoints,
  addToBackpack,
  removeFromBackpack,
  addWeapon,
  removeWeapon,
  addDiscipline,
  removeDiscipline,
} = loneWolf.actions;
