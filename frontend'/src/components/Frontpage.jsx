import React from "react";
import "./Frontpage.css";

const artworks = [
  { id: 1, title: "Starry Night", artist: "Van Gogh", img: "/art1.jpg" },
  { id: 2, title: "The Scream", artist: "Edvard Munch", img: "/art2.jpg" },
  { id: 3, title: "Mona Lisa", artist: "Leonardo da Vinci", img: "/art3.jpg" },
];

export default function Frontpage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Digital Art Gallery</h1>
        <button className="explore-btn">Explore Art</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Discover Timeless Art</h2>
        <p>A curated collection of the world's most iconic masterpieces.</p>
        <button className="cta-btn">Start Exploring</button>
      </section>

      {/* Art Gallery */}
      <div className="gallery">
        {artworks.map((art) => (
          <div key={art.id} className="card">
            <img src={art.img} alt={art.title} className="art-image" />
            <div className="info">
              <h3>{art.title}</h3>
              <p>{art.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Digital Art Gallery | All rights reserved.</p>
      </footer>
    </div>
  );
}