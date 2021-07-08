import { IParticipant } from "./../../components/sidebar/sidebar.types";
import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "../../components/sidebar/sidebar.types";

interface GroupsSliceState {
  groups: IGroup[];
  selectedChips: IParticipant[];
}

const initialState: GroupsSliceState = {
  groups: [],
  selectedChips: [],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (
      state,
      { payload }: PayloadAction<Omit<IGroup, "participants">>
    ) => {
      state.groups.push({ ...payload, participants: state.selectedChips });
    },
    addSelectedChips: (state, { payload }: PayloadAction<IParticipant>) => {
      state.selectedChips = [...state.selectedChips, payload];
    },
    removeSelectedChips: (state, { payload }: PayloadAction<IParticipant>) => {
      state.selectedChips = state.selectedChips.filter(
        (chip) => chip.id !== payload.id
      );
    },
    clearSelectedChips: (state) => {
      state.selectedChips = [];
    },
  },
});

export const {
  addGroup,
  addSelectedChips,
  removeSelectedChips,
  clearSelectedChips,
} = groupsSlice.actions;

export const groupSelector = (state: RootState) => state.groupsReducer;

export default groupsSlice.reducer;
