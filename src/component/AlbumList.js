import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function AlbumsList() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title} <Link to={`/photos/${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
