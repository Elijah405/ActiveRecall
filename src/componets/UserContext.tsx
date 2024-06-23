import { createContext, useState, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserData {
  tokens: ReactNode;
}

const UserContext = createContext({});

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({});

  const addUser = (tokens: UserData) => {
    setUser(tokens);
  };

  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
