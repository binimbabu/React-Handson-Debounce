import { useEffect, useState } from "react";
import "./App.css";

function App() {
  var [query, setQuery] = useState("");
  var [debounce, setDebounce] = useState("");
  useEffect(() => {
    var handler = setTimeout(() => {
      setDebounce(query);
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debounce) {
      console.log("API CALL => ", debounce);
    }
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default App;
