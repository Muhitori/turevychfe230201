import { render, screen } from "@testing-library/react";
import { Card } from ".";

const user = {
	phone: "902-738-3242",
	name: "Geordan Aaryn",
	nickname: "@geordanaaryn",
	email: "geordan.aaryn@fallinhay.com",
	position: "Chief Executive Officer",
	photo: "1.jpg",
};

test("card renders", () => {
	render(<Card user={user} onUserSelect={() => {}} />);
	const nameElement = screen.getByText("Geordan Aaryn");
	const positionElement = screen.getByText("Chief Executive Officer");
	const emailElement = screen.getByText("geordan.aaryn@fallinhay.com");
	const nicknameElement = screen.getByText("@geordanaaryn");
	const phoneElement = screen.getByText("902-738-3242");

	expect(nameElement).toBeInTheDocument();
	expect(positionElement).toBeInTheDocument();
	expect(emailElement).toBeInTheDocument();
	expect(nicknameElement).toBeInTheDocument();
	expect(phoneElement).toBeInTheDocument();
});
