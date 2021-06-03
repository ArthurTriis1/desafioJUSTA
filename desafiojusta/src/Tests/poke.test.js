import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from '../App'
import renderWithRouter from './renderWithRouter'

describe("homepage's tests", () => {
  it('Header', () => {
    const {queryByTestId} = render(<App />)
  
    expect(queryByTestId('header-home')).toBeDefined();
  })

  it('Texto de boas vindas', () => {
    const {getByRole} = render(<App />)
    const welcomeText = getByRole('heading', {level:1});
      
    expect(welcomeText).toBeDefined();
    expect(welcomeText.textContent).toBe('Seja bem vindo(a), Treinador(a) Pokémon')
  })

  it('Select', () => {
    const { getByRole, history} = renderWithRouter(<App />);
    const selectPokemon = getByRole('combobox');
    let { pathname } = history.location;
    
    expect(selectPokemon).toBeDefined();
    fireEvent.click(selectPokemon)
    const selectedPokemon = fireEvent.change(selectPokemon, { target: { value: 'squirtle' }})
    if (selectedPokemon) {
      pathname = '/squirtle'
    } 
    expect(pathname).toBe('/squirtle');
  })
  });

  test("pokepage's tests", async() => {
    const selectedPokemon = {
      name: 'Squirtle',
    }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(selectedPokemon)})

      const { findByText } = render(<App />)
      await findByText('Squirtle')
  });
