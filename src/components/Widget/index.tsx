import { FC } from "react";
import { User } from "../../types/User";
import { List } from "./List";

interface Props {
	users: User[];
}

export const Widget: FC<Props> = ({ users }) => {
	return <List users={users} />;
};
