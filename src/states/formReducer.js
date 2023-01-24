import { actionTypes } from "./actionTypes";

export const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
    education: "",
    terms: false
};
export const reducer = (state, action) => {
    if (action.type === actionTypes.input) return { ...state, [action.payload.name]: action.payload.value };
    if (action.type === actionTypes.terms) return { ...state, terms: !state.terms }
};
