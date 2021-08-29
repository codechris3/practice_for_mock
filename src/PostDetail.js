import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    async function loadPost() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/${postId}/comments",
          { signal: abortController.signal }
        );

        const user = await response.json();
        setPost(post);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    loadPost();

    return () => {
      abortController.abortController();
    };
  }, [postId]);

  if (post.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}
