import { useState } from "react";
import PropTypes from 'prop-types';
import DataApi from "../lib/BackEnd";
import MockedApi from "../lib/Mocked";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const [currentApi, setCurrentApi] = useState(DataApi);
  const toggleApi = () => {
    setCurrentApi(currentApi === DataApi ? MockedApi : DataApi);
  };

  return (
    <ApiContext.Provider value={{ currentApi, toggleApi }}>
      {children}
    </ApiContext.Provider>
  )
}

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ApiContextProvider;