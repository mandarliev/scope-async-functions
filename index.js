// Scope and async functions

const fetchSomeEmployees = async () => {

  const fetchTheData = async() => {
    const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const data = await res.json();
    console.log(data);
  }

  fetchTheData();
  
};

fetchSomeEmployees();
