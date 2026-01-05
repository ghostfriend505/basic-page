import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './app.css';

/* -------------------- DATA -------------------- */

const challenges = [
  {
    name: "Unreal Engine",
    description: "Used to learn Game Development",
    status: "Never Gonna be completed",
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
    status: "Same as first One",
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

/* -------------------- PAGES -------------------- */

const HomePage = () => {
  return (
    <div className="home-page">
      <div className= "home">
        <h1>Home Page</h1>
      </div>
      <div className="inside-home">
        <p>Hello this is a website which is in progress</p>
        <small>Stay Tuned with us</small>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about">
        <h1>About Page</h1>
      </div>

      <div className="inside-about">
      <p>
        <strong>
          Hello and welcome. I am Ujjwal Kumar learning React.
        </strong>
      </p>
      <small>Stay Tuned for more</small>
      </div>

    </div>
  );
};

const WhyPage = () => {
  return (
    <div>
      <h1>Why Page</h1>
      <p>Stop asking why and just do it.</p>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Email: ujjwal.kumar.2003@gmail.com</p>
      <p>
        Insta:{' '}
        <a
          href="https://www.instagram.com/ujj_wal_kum_ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </p>
    </div>
  );
};

const NotFound = () => {
  return <h1>404 – Page Not Found</h1>;
};

/* -------------------- NAVBAR -------------------- */

const NavBar = () => {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/why">Why</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/challenge">Challenge</NavLink></li>
    </ul>
  );
};

/* -------------------- CHALLENGE -------------------- */

const ChallengeDetail = () => {
  const { slug } = useParams();
  const challenge = challenges.find(c => c.slug === slug);

  if (!challenge) return <NotFound />;

  return (
    <div>
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
      <p> <strong>Status:</strong> {challenge.status}</p>
      <p>Days: {challenge.days}</p>
      <p>Level: {challenge.level}</p>
      <p>Duration: {challenge.duration}</p>
      <p>Author: {challenge.author}</p>
    </div>
  );
};

const Challenge = () => {
  return (
    <div>
      <h1>Challenge Page</h1>

      <ul>
        {challenges.map(({ name, slug }) => (
          <li key={slug}>
            <NavLink to={`/challenge/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":slug" element={<ChallengeDetail />} />
        <Route path="" element={<h3>Select a challenge above</h3>} />
      </Routes>
    </div>
  );
};

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

reportWebVitals();
