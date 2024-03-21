import Navbar from '../components/Navbar';
import '../styles/Landing.css';
import art from '../art.png';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="big-banner">
        <div className="banner-text-section">
          <h1 className="banner-big-text">
            <i>
              <b>Spark </b>
            </i>
            : Light Up Your Learning
          </h1>
          <p className="banner-medium-text">
            Supercharge your memory and conquer any subject with the power of
            flashcards!
          </p>
          <p className="banner-medium-text">
            Spark is a free, user-friendly web app that lets you create and
            share personalized decks of flashcards to boost your learning in any
            field.
          </p>
          <button className="get-started-button">Get Started for Free!</button>
        </div>
        <div className="banner-image-section">
          <img className="art-image" src={art} alt="Art" />
        </div>
      </div>
      <h2 className="sections-title">Here's what Spark can do for you:</h2>
      <div className="features">
        <div className="features-card">
          <b>Create</b> flashcards and organize them in decks. Add text, images,
          and even formulas to your flashcards!
        </div>
        <div className="features-card">
          <b>Study</b> effectively. Utilize spaced repetition, a scientifically
          proven method to improve memory retention.
        </div>
        <div className="features-card">
          <b>Share</b> your decks publicly or with friends and classmates for
          group study sessions.
        </div>
        <div className="features-card">
          <b>Browse</b> a vast library of decks shared by other users covering a
          wide range of topics!
        </div>
      </div>
      <div className="invite">
        <h2 className="sections-title">
          Ready to ignite your learning journey?
        </h2>
      </div>
    </>
  );
};

export default Landing;
