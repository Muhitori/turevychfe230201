import { FC, useState } from "react";
import { User } from "../../types/User";
import { Card } from "./Card";
import { List } from "./List";

interface Props {
	users: User[];
}

export const Widget: FC<Props> = ({ users }) => {
	const [user, setUser] = useState<User | null>(null);

	const handleSelectUser = (user: User | null) => {
		setUser(user);
	};

	return user ? (
		<Card user={user} onUserSelect={handleSelectUser} />
	) : (
		<List users={users} onUserSelect={handleSelectUser} />
	);
};
