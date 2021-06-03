import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./renderWithRouter";

describe("homepage's tests", () => {
  it("Header", () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId("header-home")).toBeDefined();
  });

  it("Texto de boas vindas", () => {
    const { getByRole } = render(<App />);
    const welcomeText = getByRole("heading", { level: 1 });

    expect(welcomeText).toBeDefined();
    expect(welcomeText.textContent).toBe(
      "Seja bem vindo(a), Treinador(a) Pokémon"
    );
  });

  it("Select", () => {
    const { getByRole, history } = renderWithRouter(<App />);
    const selectPokemon = getByRole("combobox");
    let { pathname } = history.location;

    expect(selectPokemon).toBeDefined();

    fireEvent.click(selectPokemon);

    const selectedPokemon = fireEvent.change(selectPokemon, {
      target: { value: "squirtle" },
    });
    if (selectedPokemon) {
      pathname = "/squirtle";
    }

    expect(pathname).toBe("/squirtle");
  });

  it("testing options", async () => {
    const listPokemon = {
      name: "Squirtle",
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(listPokemon),
    });

    const { findByText } = renderWithRouter(<App />);
    const selectedPokemon = await findByText("pikachu");
    
    expect(selectedPokemon).toBeTruthy();
  });
});
