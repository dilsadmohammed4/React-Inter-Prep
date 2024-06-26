import { useState, createContext } from "react";
import { Component2 } from "./Component2";

export const UserContext = createContext();
export const GreetContext = createContext();

export const Component1 = () => {
  const [user, setUser] = useState("Dilsad Mohammed");
  const [greet, setGreet] = useState("Good Morning");
  const greetPeople = (greet) => {
    setGreet(greet);
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <GreetContext.Provider value={greetPeople}>
          <h1>
            {`Hello ${user}!`} {greet} To all of You.
          </h1>
          <Component2 user={user} />
        </GreetContext.Provider>
      </UserContext.Provider>
    </>
  );
};
