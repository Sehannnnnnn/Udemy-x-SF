import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const onChange = (event) => {
      setPlace(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${place}`)
  }

  return (
    <div>
      <h1>about</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={place} onChange={onChange} placeholder="여행가고 싶은 지역"></input>
        <button type="submit">검색</button>
      </form>
    </div>
  )
}

export default About