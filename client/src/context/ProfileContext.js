import React, { useContext, createContext, useEffect } from "react";
import { defaultValues } from "./DefaultValue";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileContext = createContext(defaultValues);

//this is for app
export const ProfileProvider = ({ children }) => {
  const { user } = useAuth0();

  useEffect(() => {}, []);

  return (
    <ProfileContext.Provider value={defaultValues}>
      {children}
    </ProfileContext.Provider>
  );
};

//give the all the values for components
export const useProfileContext = () => useContext(ProfileContext);
