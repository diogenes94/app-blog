import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import { ProgressSpinner } from 'primereact/progressspinner';
import PostList from './PostList';



function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toastRef = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse, commentsResponse] =
          await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/comments')
          ]);

        if (!postsResponse.ok || !usersResponse.ok
          || !commentsResponse.ok) {
          throw new Error('Falha na requisição');
        }
        const postsData = await postsResponse.json();
        setPosts(postsData);

        const usersData = await usersResponse.json();
        setUsers(usersData);

        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App' style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {loading && <ProgressSpinner />}
      {!loading && !error && (
        <div>
          <PostList posts={posts} users={users} comments={comments} />
        </div>
      )}
    </div>
  );
}

export default App;
