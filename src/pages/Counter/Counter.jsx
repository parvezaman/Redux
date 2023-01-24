import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    console.log(action)
    if (action.type === 'inc') return { count: state.count + action.payload.step };
    if (action.type === 'dec') return { count: state.count - action.payload.step };
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ border: "2px solid grey", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap: 55 }}>
            <div style={{ fontSize: 55 }}>
                {state.count}
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'inc', name: 'aman', payload: { step: 5 } })} style={{ fontSize: 55 }}>+</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'dec', name: "parvez", payload: { step: 5 } })} style={{ fontSize: 55 }}>-</button>
            </div>
        </div>
    );
};

export default Counter;