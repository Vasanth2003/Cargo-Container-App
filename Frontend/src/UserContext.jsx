import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      axios.get('/exporter/profile')
        .then(({ data }) => {
          setUser(data);
          console.log(data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
