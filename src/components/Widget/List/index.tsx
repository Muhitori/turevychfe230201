import { FC, useState } from "react";
import { User } from "../../../types/User";
import { ListCard } from "./ListCard";
import "./styles.css";

interface Props {
	users: User[];
	onUserSelect: (email: User | null) => void;
}

const SHOW_COUNT = 3;

export const List: FC<Props> = ({ users, onUserSelect }) => {
	const [isMinified, setMinified] = useState(true);

	const toggleMinified = () => setMinified(!isMinified);

	const showedUsers = isMinified
		? users.filter((_, index) => index < SHOW_COUNT)
		: users;

	return (
		<div className='list'>
			{showedUsers.map((user) => (
				<ListCard key={user.email} user={user} onUserSelect={onUserSelect} />
			))}
			<div className='buttonWrapper'>
				<button className='listButton' onClick={toggleMinified}>
					{isMinified ? "View all" : "View less"}
				</button>
			</div>
		</div>
	);
};
