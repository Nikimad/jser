import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <form>
        <label>
          Title
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>
      <button
        onClick={() => {
          fetch("api/boards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: val,
            }),
          })
          .catch((e) => console.log(e));
        }}
      >
        POST
      </button>
      <button onClick={() => fetch("api/boards").then(res => res.json()).then(data => console.log(data))}>Get</button>
    </div>
  );
};

export default App;
