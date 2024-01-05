import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees : [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createEmployee:(state, { payload }) => {
      // state = l'état actuel de notre slice
      // action = l'élément qui va être dispatcher
      // Payload = la valeur envoyé par l'action pour mettre à jour la propriété employees
      
          
    },
  },
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

//  state.employees.push(payload);