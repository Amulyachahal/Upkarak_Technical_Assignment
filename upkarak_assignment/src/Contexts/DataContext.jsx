import { createContext, useReducer } from "react";
import DataReducer from "../Reducers/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, {
    formData: [],
  });

  const getEmptyFields = (formData) => {
    // Filter out fields with empty values
    const emptyFields = Object.entries(formData).filter(([key, value]) => {
      // Check if the value is an array and if its length is zero
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      // Check if the value is a string and if its length is zero
      return typeof value === "string" && value.length === 0;
    });

    // Convert the filtered result back to an object
    const result = emptyFields.map(([key]) => key).join(", ");

    alert("missing fields --> " + result);
    console.log(result);

    return result;
  };

  return (
    <DataContext.Provider value={{ state, dispatch, getEmptyFields }}>
      {children}
    </DataContext.Provider>
  );
};
