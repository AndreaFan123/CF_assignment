# Assignment 6

## Original Code

```tsx
function SearchButton() {
  return <button> Search </button>;
}
function SearchInput() {
  return <input />;
}
export default function Page() {
  return (
    <>
      <nav>
        <SearchButton />
      </nav>
      <SearchInput />
    </>
  );
}
```

## Amendment

```tsx
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <nav>
        <SearchButton onButtonClick={() => setFocus(!focus)} />
      </nav>
      <SearchInput focus={focus} />
    </>
  );
}

function SearchButton({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div>
      <button onClick={() => onButtonClick()}>Search</button>
    </div>
  );
}

function SearchInput({ focus }: { focus: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
```

## Approach

- Set up focus state using `const [focus, setFocus] = useState(false);`
- Pass `setFocus` to `SearchButton`
- Pass `focus` to `SearchInput`
- Use `useRef` to get `input` reference
- Use `useEffect` to listen for change in `focus`
