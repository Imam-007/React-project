const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maxime
          necessitatibus quasi ea architecto tenetur minus facere ipsa officia
          odio!
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="cat-btn">Category</button>
        </div>
      </div>
      <div className="hero-image">
        <img className="img-logo" src="/Images/shoes.webp" alt="hero-img" />
      </div>
    </main>
  );
};

export default HeroSection;
