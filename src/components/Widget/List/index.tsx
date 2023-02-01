import { FC, useState } from "react";
import { User } from "../../../types/User";
import { ListCard } from "./ListCard";
import "./styles.css";

interface Props {
	users: User[];
}

const SHOW_COUNT = 3;

export const List: FC<Props> = ({ users }) => {
	const [isMinified, setMinified] = useState(true);

	const toggleMinified = () => setMinified(!isMinified);

	const showedUsers = isMinified
		? users.filter((_, index) => index < SHOW_COUNT)
		: users;

	return (
		<div className='list'>
			{showedUsers.map((user) => (
				<ListCard key={user.email} user={user} />
			))}
			<div className='buttonWrapper'>
				<button className='listButton' onClick={toggleMinified}>
					{isMinified ? "View all" : "View less"}
				</button>
			</div>
		</div>
	);
};
