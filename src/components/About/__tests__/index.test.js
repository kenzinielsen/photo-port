import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);
describe('About component', () => {
    //first
    it('renders', () => {
        render(<About
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockSetCurrentCategory}
            />);
    });
    //second
    it('matches snapshot DOM node structure', () => {
        render(<About/>);
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })

})