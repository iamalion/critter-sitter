import { render, screen, cleanup } from '@testing-library/react';
import PetProfile from '../PetProfile';
import '@testing-library/jest-dom/extend-expect'

test('should render PetProfile component', () => {
    render(<PetProfile />);
    const petProfileElement = screen.getByTestId('pet-profile-1');
    expect(petProfileElement).toBeInTheDocument();
})

