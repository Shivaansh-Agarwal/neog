import React, { useState } from "react";
import "./styles.css";

const booksList = [
  { name: "Ikigai", rating: "4/5" },
  { name: "Let's Talk Money - Monika Halan", rating: "4/5" },
  { name: "The Alchemist - Paulo Coelho", rating: "5/5" },
  { name: "Man's Search For Meaning - Victor Frankl", rating: "3.5/5" },
  { name: "Rich Dad Poor Dad - Robert Kiyosaki", rating: "4/5" },
  { name: "Think and Grow Rich - Napolean Hill", rating: "5/5" },
  {
    name: "Master your Money Master your Life - Abhishek Kumar",
    rating: "5/5"
  },
  { name: "Life's Amazing Secrets - Gaur Gopal Das", rating: "5/5" },
  {
    name:
      "	Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future - Ashlee Vance",
    rating: "4/5"
  }
];
const movieList = [
  { name: "Ludo", rating: "3/5" },
  { name: "Snowden", rating: "3/5" }
];
const tvseriesList = [
  { name: "The Queen's Gambit", rating: "4/5" },
  { name: "Breaking Bad", rating: "5/5" }
];

export default function App() {
  const [currentList, setCurrentList] = useState(booksList);

  function categoryClickHandler(event) {
    let category = event.target.innerText;

    switch (category) {
      case "Books":
        setCurrentList(booksList);
        break;
      case "Movies":
        setCurrentList(movieList);
        break;
      case "TV-Series":
        setCurrentList(tvseriesList);
        break;
      default:
        setCurrentList(booksList);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Watch List</h1>
        <p>
          This is a log of the books, Movies & TV-Series I've read or watched
          and how I rate them...
        </p>
      </header>

      <div className="container-center">
        <div className="categories">
          <button onClick={categoryClickHandler}>Books</button>
          <button onClick={categoryClickHandler}>Movies</button>
          <button onClick={categoryClickHandler}>TV-Series</button>
        </div>
        <hr />
        <div className="main-content">
          <ul>
            {currentList.map((item) => {
              return (
                <li key={item.name}>
                  <div className="item-name">{item.name}</div>
                  <div className="rating">{item.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
