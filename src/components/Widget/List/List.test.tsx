import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Widget } from "..";
import { ListCard } from "./ListCard";
import initData from "../../../utils/initData.json";

test("list card renders", () => {
	render(<ListCard user={initData[0]} onUserSelect={() => {}} />);
	const nameElement = screen.getByText(initData[0].name);
	const nicknameElement = screen.getByText(initData[0].nickname);

	expect(nameElement).toBeInTheDocument();
	expect(nicknameElement).toBeInTheDocument();
});

test("list switch", () => {
	render(<Widget users={initData} />);
	const cards = screen.getAllByText("View");
	expect(cards.length).toBe(3);

	userEvent.click(screen.getByText("View all"));

	const newCards = screen.getAllByText("View");
	expect(newCards.length).toBe(10);
});
