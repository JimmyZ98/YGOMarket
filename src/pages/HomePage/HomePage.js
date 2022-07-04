import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import PostItem from "../../components/PostItem/PostItem";
import axios from "axios";

function HomePage() {
  const API_URL = "http://localhost:8080";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/`).then((response) => {
      setPosts(response.data);
    });
  }, [`${API_URL}/`]);

  if (posts.length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <div className="home">
      <ul className="home__posts-list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
