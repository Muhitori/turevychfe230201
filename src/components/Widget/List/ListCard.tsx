import { FC } from "react";
import { User } from "../../../types/User";
import "./styles.css";

interface Props {
	user: User;
}

export const ListCard: FC<Props> = ({ user }) => {
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
				<button className='listButton'>View</button>
			</div>
		</div>
	);
};
