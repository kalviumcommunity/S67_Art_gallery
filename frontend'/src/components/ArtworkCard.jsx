import PropTypes from "prop-types";
import axios from "axios";  

import { useState, useEffect } from "react";
import './ArtworkCard.css';

const ArtworkCard = ({ title, artist, year, image }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-xs sm:max-w-sm">
      <img
        src={image}
        alt={`Artwork: ${title} by ${artist}`}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">By {artist} ({year})</p>
    </div>
  );
};  

const ArtworkList = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/artworks")
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {card.map(({ title, artist, year, image }) => (
        <ArtworkCard
          key={title}
          title={title}
          artist={artist}
          year={year}
          image={image}
        />
      ))}
    </div>
  );
};

// PropTypes for validation 
ArtworkCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
};

// Example dummy data
export const DummyArtwork = () => (
  <ArtworkCard
    title="Starry Night"
    artist="Vincent van Gogh"
    year={1889}
    image="https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  />
)
export default {DummyArtwork, ArtworkList};

