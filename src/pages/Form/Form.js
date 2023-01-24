import React, { useReducer } from 'react';

function Form() {
    const initialState = {
        firstName: "",
        lastName: "",
        age: 0,
        email: "",
        gender: "",
        education: "",
        terms: false
    };
    const reducer = (state, action) => {
        if (action.type === 'input') return { ...state, [action.payload.name]: action.payload.value };
        if (action.type === 'terms') return { ...state, terms: !state.terms }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" id="firstName" type="text" onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" id="lastName" type="text" onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input name="age" id="age" type="number" onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input name="email" id="email" type="email" onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="gender">Select gender</label>
                    <select name="gender" id="gender" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}>
                        <option id="male" name="male" value="male">male</option>
                        <option id="female" name="female" value="female" >female</option>
                        <option id="third" name="third" value="third">third</option>
                        <option id="notToMention" name="notToMention" value="notToMention" >not to mention</option>
                    </select>
                </div>
                <div>
                    <h3>select education</h3>
                    <div>
                        <input type="radio" id="ssc" name="education" value="ssc" onClick={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="education">SSC</label>
                    </div>
                    <div>
                        <input type="radio" id="hsc" name="education" value="hsc" onClick={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="education">HSC</label>
                    </div>
                    <div>
                        <input type="radio" id="ba" name="education" value="ba" onClick={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="education">BA</label>
                    </div>
                </div>
                <div>
                    <input name='terms' id='terms' type='checkbox' onClick={() => dispatch({ type: 'terms' })} />
                    <label for='terms'>Agree to the terms?</label>
                </div>
                <button disabled={!state.terms} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
