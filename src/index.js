import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';

import './app.css';

/* -------------------- DATA -------------------- */

const challenges = [
  {
    name: "Unreal Engine",
    description: "Used to learn Game Development",
    status: "Incomplete",
    days: 465,
    level: "Beginner to Medium",
    duration: "2021 - 2023",
    slug: "unreal-engine",
    author: "Epic Games",
    link: "https://www.unrealengine.com/en-US/",
  },
  {
    name: "Daz 3D",
    description: "Used to learn 3D Modelling and Animation",
    status: "Incomplete",
    days: 400,
    level: "Beginner to Medium",
    duration: "2020 - 2023",
    slug: "daz-3d",
    author: "Daz 3D",
    link: "https://www.daz3d.com/",
  },
  {
    name: "Programming",
    description: "Used to learn Programming Languages",
    status: "Still Learning",
    days: "Over few Years",
    level: "Beginner to Advanced",
    duration: "2018 - Present",
    slug: "programming",
    author: "Ujjwal Kumar",
  },
];

/* -------------------- NAVBAR -------------------- */

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink className="nav-link" to="/why">Why</NavLink></li>
        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        <li><NavLink className="nav-link" to="/challenge">Challenge</NavLink></li>
      </ul>
    </nav>
  );
};

/* -------------------- PAGES -------------------- */

const HomePage = () => (
  <div className="page home-page">
    <div className="page-header">
      <h1>Home Page</h1>
    </div>
    <div className="page-content">
      <p>Hello this is a website which is in progress</p>
      <small>Stay Tuned with us</small>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page about-page">
    <div className="page-header">
      <h1>About Page</h1>
    </div>
    <div className="page-content">
      <p><strong>Hello and welcome. I am Ujjwal Kumar learning React.</strong></p>
      <small>Stay Tuned for more</small>
    </div>
  </div>
);

const WhyPage = () => (
  <div className="page why-page">
    <div className="page-header">
      <h1>Why Page</h1>
    </div>
    <div className="page-content">
      <p>Stop asking why and just do it.</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="page contact-page">
    <div className="page-header">
      <h1>Contact Page</h1>
    </div>
    <div className="page-content">
      <p>Email: ujjwal.kumar.2003@gmail.com</p>
      <p>
        Insta:{' '}
        <a
          href="https://www.instagram.com/ujj_wal_kum_ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Instagram
        </a>
      </p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="page">
    <h1>404 – Page Not Found</h1>
  </div>
);

/* -------------------- CHALLENGE -------------------- */

const ChallengeDetail = () => {
  const { slug } = useParams();
  const challenge = challenges.find(c => c.slug === slug);

  if (!challenge) return <NotFound />;

  return (
    <div className="challenge-card">
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
      <p><strong>Status:</strong> {challenge.status}</p>
      <p><strong>Days:</strong> {challenge.days}</p>
      <p><strong>Level:</strong> {challenge.level}</p>
      <p><strong>Duration:</strong> {challenge.duration}</p>
      <p><strong>Author:</strong> {challenge.author}</p>
    </div>
  );
};

const Challenge = () => (
  <div className="page challenge-page">
    <div className="page-header">
      <h1>Challenge Page</h1>
    </div>

    <div className="challenge-list">
      <ul>
        {challenges.map(({ name, slug }) => (
          <li key={slug}>
            <NavLink className="challenge-link" to={`/challenge/${slug}`}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

    <div className="challenge-detail">
      <Routes>
        <Route path=":slug" element={<ChallengeDetail />} />
        <Route path="" element={<h3>Select a challenge above</h3>} />
      </Routes>
    </div>
  </div>
);

/* -------------------- APP -------------------- */

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why" element={<WhyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/challenge/*" element={<Challenge />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

/* -------------------- RENDER -------------------- */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
