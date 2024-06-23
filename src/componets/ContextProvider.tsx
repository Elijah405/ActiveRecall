import { useState, ReactNode } from "react";
import ContextData from "./Context";
import { userToken } from "./Context";

interface UserProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: UserProviderProps) => {
  const [userData, setData] = useState<userToken | null>(null);

  return (
    <ContextData.Provider value={{ userData, setData }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
