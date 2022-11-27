import React, { useState, createContext}  from "react"


export const UserContext = createContext({
    setUser: () => {},
  });

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({ auth: true });

    return (
      <UserContext.Provider setUser={JSON.parse(localStorage.getItem("user"))}>
        {children}
      </UserContext.Provider>
    );
  };

