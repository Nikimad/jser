import { useEffect } from "react";
import { useState } from "react";

const Get = () => {
  const [posts, setPosts] = useState();

  const getData = () =>
    fetch("http://127.0.0.1:5173/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.log(e));

  const postData = () =>
    fetch("http://127.0.0.1:5173/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

  return (
    <>
      <button onClick={getData}>Get</button>
      <button onClick={postData}>Post</button>
      <ul>
        { posts && posts.map((post) => <li key={post.id}>{post.id}</li>) }
      </ul>
    </>
  );
};

export default Get;
