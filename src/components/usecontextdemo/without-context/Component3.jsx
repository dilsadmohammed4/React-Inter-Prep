import { Component4 } from "./Component4";
export const Component3 = ({ user }) => {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 user={user} />
    </>
  );
};
