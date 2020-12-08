import React, { useState } from "react";
import "./styles.css";

var foodEmojiDictionary = {
  "🎂": "Birthday Cake",
  "🍇": "Grapes",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🍺": "Beer Mug",
  "🍩": "Doughnut",
  "🍨": "Ice Cream",
  "🥚": "Egg",
  "🍪": "Cookie",
  "🍟": "French Fries"
};
const knownEmojis = Object.keys(foodEmojiDictionary);

export default function App() {
  const defaultMessage = "Translation will appear here...";
  const [emojiMeaning, setEmojiMeaning] = useState(defaultMessage);
  const [enteredValue, setEnteredValue] = useState("");

  function emojiClickHandler(event) {
    /**
     * Open Question: How to clear search-bar when onClick event is fired?
     * In vanillaJs it could be handled using querySelector or getElementById....
     */
    let emoji = event.target.innerText;
    let meaning = foodEmojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  function emojiInputHandler(event) {
    let inputValue = event.target.value.trim();
    let meaning = "";
    if (inputValue === "") {
      meaning = defaultMessage;
    } else if (!(inputValue in foodEmojiDictionary)) {
      meaning = "Sorry we don't have this in our database";
    } else {
      meaning = foodEmojiDictionary[inputValue];
    }
    setEnteredValue(inputValue);
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food-Emoji Interpreter</h1>
      <input
        type="text"
        onChange={emojiInputHandler}
        placeholder="search your emoji"
      ></input>

      <div id="enteredValue">{enteredValue}</div>
      <div id="meaning">{emojiMeaning}</div>

      <ul>
        {knownEmojis.map(function (emoji) {
          return (
            <li key={emoji} onClick={emojiClickHandler}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
