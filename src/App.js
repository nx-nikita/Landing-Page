import "./App.css";

function App() {
  return (
    <div className="spotify-app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
    alt="Spotify Logo"
    className="spotify-logo"
  />
</div>

        <nav>
          <a href="#features">Features</a>
          <a href="#playlists">Playlists</a>
          <a href="#premium">Premium</a>
          <a href="#download">Download</a>
         
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Music for <span>everyone</span>
          </h1>
          <p>
            Millions of songs, podcasts, and playlists.
            Discover music you love — anytime, anywhere.
          </p>
          <div className="hero-buttons">
  <button
    className="primary-btn"
    onClick={() =>
      window.open("https://www.spotify.com/free/", "_blank")
    }
  >
    Get Spotify Free
  </button>

  <button
    className="secondary-btn"
    onClick={() =>
      window.open("https://open.spotify.com/", "_blank")
    }
  >
    Open Web Player
  </button>
</div>

        </div>
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          alt="music"
          className="hero-img"
        />
      </section>

      
{/* Playlists */}
<section className="playlists" id="playlists">
  <h2>Popular Playlists</h2>

  <div className="playlist-grid">
    <div className="playlist-card">
      <div className="playlist-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
          alt="Top Hits"
        />
        <button
          className="play-btn"
          onClick={() => window.open("https://open.spotify.com/", "_blank")}
        >
          ▶
        </button>
      </div>
      <h4>Today's Top Hits</h4>
      <p>Best of global chartbusters</p>
    </div>

    <div className="playlist-card">
      <div className="playlist-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
          alt="Chill Vibes"
        />
        <button
          className="play-btn"
          onClick={() => window.open("https://open.spotify.com/", "_blank")}
        >
          ▶
        </button>
      </div>
      <h4>Chill Vibes</h4>
      <p>Relax, unwind & feel good</p>
    </div>

    <div className="playlist-card">
      <div className="playlist-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
          alt="Workout Beats"
        />
        <button
          className="play-btn"
          onClick={() => window.open("https://open.spotify.com/", "_blank")}
        >
          ▶
        </button>
      </div>
      <h4>Workout Beats</h4>
      <p>Energy boosting tracks</p>
    </div>

    <div className="playlist-card">
      <div className="playlist-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a"
          alt="Focus Flow"
        />
        <button
          className="play-btn"
          onClick={() => window.open("https://open.spotify.com/", "_blank")}
        >
          ▶
        </button>
      </div>
      <h4>Focus Flow</h4>
      <p>Music to boost productivity</p>
    </div>
    <div className="playlist-card">
  <div className="playlist-img-wrapper">
    <img
      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
      alt="Indie Mix"
    />
    <button
      className="play-btn"
      onClick={() => window.open("https://open.spotify.com/", "_blank")}
    >
      ▶
    </button>
  </div>
  <h4>Indie Mix</h4>
  <p>Fresh & underground vibes</p>
</div>

<div className="playlist-card">
  <div className="playlist-img-wrapper">
    <img
      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      alt="Party Hits"
    />
    <button className="play-btn" onClick={() => window.open("https://open.spotify.com/", "_blank")}>
      ▶
    </button>
  </div>
  <h4>Party Hits</h4>
  <p>Dance & celebrate nonstop</p>
</div>

  </div>
</section>


      {/* Premium */}
      <section className="premium" id="premium">
        <h2>Go Premium</h2>
        <div className="premium-cards">
          <div className="premium-card">
            <h3>Free</h3>
            <p className="price">₹0</p>
            <ul>
              <li>Ads included</li>
              <li>Shuffle play</li>
              <li>Basic audio</li>
            </ul>
          </div>

          <div className="premium-card active">
            <h3>Premium</h3>
            <p className="price">₹119 / month</p>
            <ul>
              <li>No ads</li>
              <li>Offline listening</li>
              <li>High quality audio</li>
            </ul>
          </div>

          <div className="premium-card">
            <h3>Family</h3>
            <p className="price">₹179 / month</p>
            <ul>
              <li>6 accounts</li>
              <li>Parental control</li>
              <li>Offline mode</li>
            </ul>
          </div>
        </div>
      </section>

    {/* CTA */}
<section className="cta" id="download">
  <div className="cta-content">
    <h2>Ready to listen?</h2>
    <p>
      Stream millions of songs, podcasts, and playlists — anytime, anywhere.
      Experience music without limits.
    </p>

    <div className="cta-buttons">
      <button
        className="primary-btn glow-btn"
        onClick={() =>
          window.open("https://www.spotify.com/download/", "_blank")
        }
      >
        Download App
      </button>

      <button
        className="secondary-btn"
        onClick={() =>
          window.open("https://open.spotify.com/", "_blank")
        }
      >
        Open Web Player
      </button>
    </div>

    {/* Store badges */}
    <div className="store-badges">
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="App Store"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Google Play"
      />
    </div>
  </div>

  {/* Decorative music waves */}
  <div className="music-waves">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <h3>Spotify</h3>
        <p>Music for everyone</p>
        <span>© 2025 Spotify Clone. Built for learning.</span>
      </footer>
    </div>
  );
}

export default App;
