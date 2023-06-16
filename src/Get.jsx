import { useState } from "react";

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

  return (
    <>
      <button onClick={getData}>Get</button>
      <button onClick={postData}>Post</button>
      <ul>
        { posts && posts.map((post) => <li key={post.id}>{post.id}</li>)}
      </ul>
    </>
  );
};

export default Get;
