# Assignment 5

## Original Code

```tsx
function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);
  return (
    <div>
      <ChildComponent name={name} age={age} />
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}
function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}
function GrandchildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

## Analysis problem

This assignment is about prop drilling. Based on the code, we need to pass `name` and `age` to `ChildComponent` and `GrandchildComponent`. To prevent prop drilling, we can use the Context API to achieve the expected outcome.

## Solution

```tsx
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
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
    </div>
  );
}

export default ParentComponentContextAPI;
```
