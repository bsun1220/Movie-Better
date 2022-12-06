import React, { useState, createContext}  from "react"

//This allows us to use to provide the data of the user to our components
//Without continuous prop drilling
export const UserContext = createContext(null);

