import React from 'react';

const appTitle = 'MLRepo';

function LandingPage() {
  return (
    <div>
      <header>
        <h1>Welcome to {appTitle}</h1>
        <nav>
          <a href="#about">Algorithms</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <h2>Leading the way in AI accessibility</h2>
        <p>{appTitle} is dedicated to advancing human capability by leveraging digital intelligence.</p>
      </main>
      <footer>
        <p style={{float: 'left'}}>{appTitle} &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default LandingPage;