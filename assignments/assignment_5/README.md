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
