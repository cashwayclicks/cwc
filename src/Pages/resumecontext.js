import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Initial Value");
  const [courseno,setcourseno]=useState(1);

  return (
    <MyContext.Provider value={{ value, setValue,courseno,setcourseno}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };

