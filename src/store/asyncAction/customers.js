import { addManyCustomersAction } from "../customReducer"

export const fetchCustomers = () => {
    return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log('error fetching', err)
      });
    };
  };