import React, { createContext, useEffect, useState } from "react";
import { getApi } from "../API/api";

export const dataContext = createContext();
export const dispatchContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState();
  
  useEffect(() => {
     getApi()
      .then((resp) => {
        setData(resp.data);
      })
  }, []);

  const action = {data};
  const dispatch = {};

  return (
    <dataContext.Provider value={action}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </dataContext.Provider>
  );
};

export default Context;
