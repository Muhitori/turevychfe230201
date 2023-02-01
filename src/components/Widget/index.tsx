import { FC } from "react";
import { User } from "../../types/User";

interface Props {
	users: User[];
}

export const Widget: FC<Props> = ({ users }) => {
	return <div></div>;
};
