import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Myntra title", () => {
    render(<App />);

    const text = screen.getByText(/Myntra Frontend Clone/i);

    expect(text).toBeInTheDocument();
});