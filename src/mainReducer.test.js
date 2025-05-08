import { availableTimesReducer } from './App';  // Adjust the path as necessary

describe('availableTimesReducer', () => {
  
  // Test for the 'INITIALIZE_TIMES' action
  it('should return the correct initial available times when "INITIALIZE_TIMES" action is dispatched', () => {
    const initialState = [];
    const action = { type: 'INITIALIZE_TIMES' };

    // Run the reducer with the action
    const newState = availableTimesReducer(initialState, action);

    // Validate that the state matches the expected available times
    expect(newState).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });

  // Test for the 'UPDATE_TIMES' action
  it('should return the same available times when "UPDATE_TIMES" action is dispatched', () => {
    const initialState = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
    const action = { type: 'UPDATE_TIMES', selectedDate: '2023-12-25' }; // Mock selected date

    // Run the reducer with the action
    const newState = availableTimesReducer(initialState, action);

    // Check that the state remains unchanged for now
    expect(newState).toEqual(initialState);
  });
});
