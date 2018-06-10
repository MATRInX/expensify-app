import authReducer from '../../reducers/auth';

test('should setup logged user state object', () => {
    const uid = '123abc';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should setup logged out user state object', () => {  
    const initialState = {
        uid: '123abc'
    };
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({});
});