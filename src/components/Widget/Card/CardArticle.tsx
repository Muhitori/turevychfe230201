import { FC } from "react";
import "./styles.css";

interface Props {
	label: string;
	value: string;
}

export const CardArticle: FC<Props> = ({ label, value }) => {
	return (
		<div className='articleWrapper'>
			<div className='label'>{label}</div>
			{value}
		</div>
	);
};
