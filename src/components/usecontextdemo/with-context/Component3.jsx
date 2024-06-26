import { Component4 } from "./Component4";
import { useContext } from "react";
import { UserContext } from "./Component1";
export const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h3>Component 3 : Hello From {user} Context Fetch</h3>
      <Component4 />
    </>
  );
};
