import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import initData from "../../utils/initData.json";

interface State {
	list: User[];
}

const initialState: State = {
	list: initData,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
