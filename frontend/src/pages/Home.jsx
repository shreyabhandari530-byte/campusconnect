
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <section className="hero">
        <h1>Your Campus, Your Community!</h1>

        <p>
          Buy, sell, exchange books and share study materials
          with students from your college.
        </p>

        <Link to="/marketplace" className="hero-button">
          Explore Marketplace
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>📚 Book Marketplace</h3>
          <p>Buy, sell, rent or exchange college books.</p>
        </div>

        <div className="feature-card">
          <h3>📝 Study Materials</h3>
          <p>Share and access notes and PDFs.</p>
        </div>

        <div className="feature-card">
          <h3>💬 Student Chat</h3>
          <p>Connect with fellow college students.</p>
        </div>

        <div className="feature-card">
          <h3>❤️ Wishlist</h3>
          <p>Save items you want to find later.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 CampusConnect | Built for Students</p>
      </footer>

    </div>
  );
}

export default Home;
