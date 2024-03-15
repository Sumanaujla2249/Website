import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css'; // Import the CSS file

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwtToken')) {
      navigate('/login');
    }
  }, []);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleFormData = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3000/posts', {
        title: title,
        content: content,
      }, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
        },
      });
      if (response.status === 201) {
        navigate('/posts');
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="form-container">
      <h1>Create Post:</h1>
      <form onSubmit={handleFormData}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitle} />
        <label>Content:</label>
        <input type="text" value={content} onChange={handleContent} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
