import { render, screen } from '@testing-library/react';
import FishProfiles from '../components/FishProfiles/FishProfiles';
import { useSelector } from 'react-redux';
import { MemoryRouter, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Preserve other exported modules
    useLocation: jest.fn(),
}));
describe('FishProfiles component', () => {
    it('renders the fish profiles correctly', () => {
        const fishProfiles = [
            // Define a smaller set of fish profiles for testing
            {
                id: '1',
                speciesName: 'Fish Species 1',
                imageUrl: 'fish1.jpg',
            },
            {
                id: '2',
                speciesName: 'Fish Species 2',
                imageUrl: 'fish2.jpg',
            },
        ];

        useSelector.mockReturnValue({ fishProfiles });
        useLocation.mockReturnValue({});

        const { getByText, getByAltText } = render(
            <MemoryRouter>
                <FishProfiles />
            </MemoryRouter>
        );

        // Assertions
        expect(getByText('Fish Species 1')).toBeInTheDocument();
        expect(screen.getByText('Fish Species 2')).toBeInTheDocument();
        expect(screen.getByAltText('Fish Species 1')).toBeInTheDocument();
        expect(screen.getByAltText('Fish Species 2')).toBeInTheDocument();
    });
});
