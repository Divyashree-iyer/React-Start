import React from "react";
import Card from "./Card";
import emojipedia from "./emojipedia";

function make_card(detail) {
  return (
    <Card emoji={detail.emoji} title={detail.name} desc={detail.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(make_card)}</dl>
    </div>
  );
}

export default App;
