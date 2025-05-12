import { render, screen } from "@testing-library/react";
import Async from "./Async";
import userEvent from "@testing-library/user-event";
describe("Async components", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "p1" }],
    });
    //Arrange
    render(<Async />);
    //Assert;
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
