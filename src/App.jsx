const App = () => (
  <>
    <button
      onClick={() =>
        fetch("api/boards")
          .then((res) => res.json())
          .then((data) => console.log(data))
      }
    >
      Get
    </button>
    <button
      onClick={() =>
        fetch("api/boards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ createdAt: Date.now() }),
        })
      }
    >
      Post
    </button>
  </>
);

export default App;
