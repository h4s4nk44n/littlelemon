import { initializeTimes, availableTimesReducer } from './App';
import { fetchAPI } from './api';

jest.mock('./api'); // 👈 mock the entire API module

describe('initializeTimes', () => {
  test('should return an array of times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes); // 👈 mock the return

    const result = initializeTimes();
    expect(result).toEqual(mockTimes);
  });
});

describe('availableTimesReducer', () => {
  test('should return correct times when SET_TIMES action is dispatched', () => {
    const initialState = [];
    const newTimes = ['18:00', '19:00'];
    const action = { type: 'SET_TIMES', payload: newTimes };

    const result = availableTimesReducer(initialState, action);
    expect(result).toEqual(newTimes);
  });

  test('should return same state when unknown action is dispatched', () => {
    const initialState = ['17:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    const result = availableTimesReducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
