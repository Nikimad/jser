import { useEffect, useState } from "react";

const Get = () => {
  const [posts, setPosts] = useState();

  const getData = () =>
    fetch("api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.log(e));

  const postData = () =>
    fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

  useEffect(() => {
    console.log(posts);
  }, [posts])

  return (
    <>
      <button onClick={getData}>Get</button>
      <button onClick={postData}>Post</button>
    </>
  );
};

export default Get;
