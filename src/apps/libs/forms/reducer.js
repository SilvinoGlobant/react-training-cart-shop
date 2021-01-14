import { createSlice } from '@reduxjs/toolkit';

export default function createFormReducer(name, initialFormState) {
    return createSlice({
        name: name,
        initialFormState,
        reducers: {
            // restores all attributes to the initial state
            resetAll: () => ({ ...initialFormState }),

            // restores an attribute to the value in the initial state
            resetAttr: (state, { payload }) => ({ ...state, [payload.name]: initialFormState[payload.name] }),

            // uses initial values as the default values where there is a null or undefined value in the payload
            resetWith: (state, { payload }) => {
                state = { ...initialFormState };

                for (const [key, value] of Object.entries(payload)) {
                    if (value !== null && value !== undefined) {
                        state[key] = value;
                    }
                }

                return state;
            },

            // sets all attributes in the payload
            update: (state, { payload }) => ({ ...state, ...payload }),
        }
    });
}