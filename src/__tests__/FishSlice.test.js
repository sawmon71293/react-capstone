import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getProfiles } from '../redux/FishSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fishSlice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch fish profiles and add them to the state', async () => {
    const mockProfiles = [
      {
        id: '1234',
        speciesName: 'Test Species',
        imageUrl: 'https://example.com/image.jpg',
        region: 'Test Region',
        availability: 'Test Availability',
        taste: 'Test Taste',
        source: 'Test Source',
        texture: 'Test Texture',
        healthBenefits: 'Test Health Benefits',
      },
    ];

    // Mock the API call
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockProfiles),
    });

    const store = mockStore({ fishProfiles: [], loading: false });

    await store.dispatch(getProfiles());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('fish/pending');
    expect(actions[1].type).toEqual('fish/rejected');

    // Restore the original fetch function
    global.fetch.mockRestore();
  });
});
