// src/components/Feed.jsx
import React, { useState, useRef, useCallback } from "react";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  // Sample data for demonstration
  const initialPosts = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    userName: `User ${i + 1}`,
    content: `This is post number ${i + 1}`,
    videoUrl: i % 2 === 0 ? "https://www.w3schools.com/html/mov_bbb.mp4" : "",
    likes: 0,
    comments: [],
  }));

  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  // Intersection Observer to trigger "load more" when last post is visible
  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  const loadMorePosts = () => {
    // Simulate fetching more posts (e.g. from server)
    const nextPosts = posts.length + 5;
    if (nextPosts >= 30) {
      // Stop after 30 for demo
      setHasMore(false);
      return;
    }

    const newPosts = Array.from({ length: 5 }, (_, i) => ({
      id: posts.length + i,
      userName: `User ${posts.length + i + 1}`,
      content: `This is post number ${posts.length + i + 1}`,
      videoUrl:
        (posts.length + i) % 2 === 0
          ? "https://www.w3schools.com/html/mov_bbb.mp4"
          : "",
      likes: 0,
      comments: [],
    }));

    setPosts((prev) => [...prev, ...newPosts]);
  };

  return (
    <div className="feed">
      {posts.map((post, idx) => {
        if (idx === posts.length - 1) {
          return (
            <div ref={lastPostRef} key={post.id}>
              <Post post={post} />
            </div>
          );
        }
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Feed;
