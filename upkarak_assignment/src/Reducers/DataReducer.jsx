const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: [...state.formData, action.payload] };
    default:
      return { ...state };
  }
};
export default DataReducer;
