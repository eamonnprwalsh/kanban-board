import { tasksReducer } from './reducer';

describe('tasksReducer', () => {
  const initialState = {
    todo: [],
    inProgress: [],
    done: [],
  };

  test('should add a task to the correct status column', () => {
    const action = {
      type: 'ADD_TASK',
      status: 'todo',
      task: { id: '1', title: 'New Task' },
    };
    const newState = tasksReducer(initialState, action);

    expect(newState.todo).toHaveLength(1);
    expect(newState.todo[0]).toEqual(action.task);
  });

  test('should move a task from one status column to another', () => {
    const stateWithTask = {
      todo: [{ id: '1', title: 'Task to Move' }],
      inProgress: [],
      done: [],
    };
    const action = {
      type: 'MOVE_TASK',
      fromStatus: 'todo',
      toStatus: 'inProgress',
      task: { id: '1', title: 'Task to Move' },
    };
    const newState = tasksReducer(stateWithTask, action);

    expect(newState.todo).toHaveLength(0);
    expect(newState.inProgress).toHaveLength(1);
    expect(newState.inProgress[0]).toEqual(action.task);
  });

  test('should handle unknown action types by returning current state', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = tasksReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test('should not mutate the original state', () => {
    const action = {
      type: 'ADD_TASK',
      status: 'todo',
      task: { id: '1', title: 'New Task' },
    };
    const newState = tasksReducer(initialState, action);

    expect(newState).not.toBe(initialState); // Ensure a new object is returned
    expect(initialState.todo).toHaveLength(0); // Ensure original state is not mutated
  });
});
