import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Detail from '../components/Detail/Detail';

// Mock the react-redux useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Detail component', () => {
  beforeEach(() => {
    // Mock the useSelector hook implementation
    useSelector.mockImplementation((selectorFn) => selectorFn({
      fish: {
        fishProfiles: [
          {
            id: '1',
            speciesName: 'Fish Species 1',
            imageUrl: 'http://example.com/fish1.jpg',
            taste: 'Delicious',
            availability: 'All year round',
            texture: 'Firm',
            source: 'Ocean',
            healthBenefits: 'Rich in omega-3 fatty acids',
          },
        ],
      },
    }));
  });

  afterEach(() => {
    // Reset the mock implementation after each test
    useSelector.mockReset();
  });

  it('renders the fish details correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/fish/1']}>
        <Routes>
          <Route path="/fish/:id" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    // Check if the fish species name is rendered
    expect(getByText('Fish Species 1')).toBeInTheDocument();

    // Check if the fish image is rendered
    const fishImage = screen.getByAltText('Fish Species 1');
    expect(fishImage).toBeInTheDocument();
    expect(fishImage.getAttribute('src')).toBe('http://example.com/fish1.jpg');

    // Check if the taste section is rendered
    expect(screen.getByText('Taste')).toBeInTheDocument();
    expect(screen.getByText('Delicious')).toBeInTheDocument();

    // Check if the availability section is rendered
    expect(screen.getByText('Availability')).toBeInTheDocument();
    expect(screen.getByText('All year round')).toBeInTheDocument();

    // Check if the texture section is rendered
    expect(screen.getByText('Texture')).toBeInTheDocument();
    expect(screen.getByText('Firm')).toBeInTheDocument();

    // Check if the source section is rendered
    expect(screen.getByText('Source')).toBeInTheDocument();
    expect(screen.getByText('Ocean')).toBeInTheDocument();

    // Check if the health benefits section is rendered
    expect(screen.getByText('Health Benefits')).toBeInTheDocument();
    expect(screen.getByText('Rich in omega-3 fatty acids')).toBeInTheDocument();
  });
});
