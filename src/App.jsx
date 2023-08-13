import { useState } from "react";

import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  //  useState are used to track a state in a function

  const toggleGAmePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {/* we will use ternary operator over here */}
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGAmePlay} />}
      {/* And also we will props over here  ans we use toggle over here to access the game play*/}
    </div>
  );
}

export default App;
