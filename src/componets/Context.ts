
import { createContext } from 'react';


export interface userToken {
    [key: string]: any;
  }


  

const ContextData = createContext<{ userData: userToken | null; setData: (data: userToken | null) => void } | undefined>(undefined);


export default ContextData;