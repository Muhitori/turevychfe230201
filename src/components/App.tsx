import { useSelector } from "react-redux";
import { usersSelector } from "../store/selector/users.selector";
import { Widget } from "./Widget";

function App() {
	const users = useSelector(usersSelector);

	return <Widget users={users} />;
}

export default App;
