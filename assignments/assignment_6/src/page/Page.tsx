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
