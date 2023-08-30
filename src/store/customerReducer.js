const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MANY_CUSTOMERS":
        return {...state, customers: [...state.customers, ...action.payload]}
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};
