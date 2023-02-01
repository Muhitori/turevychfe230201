import { RootState } from "..";

export const usersSelector = (state: RootState) => state.users.list;
export const userSelector = (email: string) => (state: RootState) =>
	state.users.list.find((user) => user.email === email);
