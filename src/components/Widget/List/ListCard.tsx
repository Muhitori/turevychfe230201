import { FC } from "react";
import { User } from "../../../types/User";
import "./styles.css";

interface Props {
	user: User;
	onUserSelect: (email: User | null) => void;
}

export const ListCard: FC<Props> = ({ user, onUserSelect }) => {
	return (
		<div className='listCardWrapper'>
			<img
				className='avatar'
				src={`/static/images/${user.photo}`}
				alt='user avatar'
			/>
			<div className='listCardInfoWrapper'>
				<div className='name'>{user.name}</div>
				<div className='username'>{user.nickname}</div>
			</div>
			<div>
				<button
					className='listButton'
					style={{ padding: "0.5rem" }}
					onClick={() => onUserSelect(user)}>
					View
				</button>
			</div>
		</div>
	);
};
