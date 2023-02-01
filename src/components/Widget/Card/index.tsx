import { FC } from "react";
import { User } from "../../../types/User";
import { CardArticle } from "./CardArticle";
import "./styles.css";

interface Props {
	user: User;
	onUserSelect: (email: User | null) => void;
}

export const Card: FC<Props> = ({ user, onUserSelect }) => {
	return (
		<div className='root'>
			<div className='header'>
				<div className='close' onClick={() => onUserSelect(null)} />
				<img
					className='avatar'
					src={`/static/images/${user.photo}`}
					alt='user avatar'
				/>
				<div className='name'>{user.name}</div>
				<div className='position'>{user.position}</div>
			</div>
			<div className='body'>
				<CardArticle label='Phone' value={user.phone} />
				<CardArticle label='Username' value={user.nickname} />
				<CardArticle label='Email' value={user.email} />
				<div>
					<button className='sendButton'>Send message</button>
				</div>
			</div>
		</div>
	);
};
