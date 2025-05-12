import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting components", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);
    //Assert;
    const helloWorldElement = screen.getByText(/hello world/i, {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if th button was Not clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const outputElement = screen.getByText(/good to see you/i, {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText(/changed/i, {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
});
