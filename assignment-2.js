import React from "react";

function App() {
  const movie = { title: "Inception", year: 2010, director: "Nolan" };

  const { title, year } = movie;

  return (
    <div>
      <h1>The movie "{title}" was released in {year}.</h1>
    </div>
  );
}

export default App;