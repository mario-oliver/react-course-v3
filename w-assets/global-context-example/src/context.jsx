import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

// const AppContext = ({ children }) => {
const AppContext = (props) => {
  const [name, setName] = useState('peter');
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
      {/* {children} */}
    </GlobalContext.Provider>
  );
};

export default AppContext;
