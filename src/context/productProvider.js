import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { productActionTypes } from "../states/actionTypes";
import {
    productReducer,
    initialState,
} from "../states/productReducer.js";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    console.log(state);

    useEffect(() => {
        dispatch({ type: productActionTypes.FETCHING_START });
        fetch("http://localhost:3000/data/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: productActionTypes.FETCHING_SUCCESS, payload: data })
            }
            )
            .catch(() => {
                dispatch({ type: productActionTypes.FETCHING_ERROR });
            });
    }, []);

    const value = {
        state,
        dispatch,
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
};

export default ProductProvider;