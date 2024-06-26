import { useContext } from "react";
import { UserContext, GreetContext } from "./Component1";
export const Component5 = () => {
  const user = useContext(UserContext);
  const greetPeople = useContext(GreetContext);
  const day = "Good Evening";
  return (
    <>
      <h3>Component 5</h3>
      <h1>{`Hello ${{ user: user }} again!`}</h1>
      <button onClick={() => greetPeople(day)}>
        Component5 Btn Send Data to Component1
      </button>
    </>
  );
};
