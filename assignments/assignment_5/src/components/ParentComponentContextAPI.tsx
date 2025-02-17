import { createContext, useContext, useState } from "react";

interface UserContextType {
  name: string | null;
  age: number | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultValue = {
  name: null,
  age: null,
  setName: () => {},
  setAge: () => {},
};

function ParentComponentContextAPI() {
  const [name, setName] = useState<string | null>("Naro");
  const [age, setAge] = useState<number | null>(12);

  return (
    <UserContext.Provider
      value={{
        name: name,
        age: age,
        setName: (newName) => setName(newName ?? null),
        setAge: (newAge) => setAge(newAge ?? null),
      }}
    >
      <input
        type="text"
        value={name ?? ""}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age ?? 0}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <ChildComponent />
      <GrandchildComponent />
    </UserContext.Provider>
  );
}
function ChildComponent() {
  const userContext = useContext(UserContext);
  const { name, age } = userContext ?? defaultValue;
  return (
    <div>
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
    </div>
  );
}
function GrandchildComponent() {
  const userContext = useContext(UserContext);
  const { name, age } = userContext ?? defaultValue;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default ParentComponentContextAPI;
