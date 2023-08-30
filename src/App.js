import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./store/asyncAction/customersApi";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 10 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 10 });
  };

  const addCustomer = (value) => {
    dispatch({
      type: "ADD_CUSTOMER",
      payload: { name: value, id: Date.now() },
    });
  };

  const removeCustomer = (id) => {
    dispatch({
      type: "REMOVE_CUSTOMER",
      payload: { id },
    });
  };
  return (
    <div className='App'>
      <h1>{cash}</h1>
      <button onClick={() => addCash()}>+</button>
      <button onClick={() => getCash()}>-</button>
      <button onClick={() => addCustomer(prompt())}>Add customer</button>
      <button onClick={() => dispatch(fetchCustomers())}>Get customers</button>
      <div>
        {customers.map((item) => {
          return (
            <div onClick={() => removeCustomer(item.id)} key={item.id}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
