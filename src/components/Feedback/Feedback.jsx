import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";

function Feedback() {
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [numberOfDislikes, setNumberOfDdisikes] = useState(0);

  const clickLike = () => {
    addLike((prevState) => prevState + 1);
  };

  const clickDislike = () => {
    addDislike((prevState) => prevState + 1);
  };

  const resetResults = () => {
    addLike(0);
    addDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="like-wrapper">
        <div className="number-likes">{numberOfLikes}</div>
        <div className="button-wrapper">
          <Button name="Like" type="button" onClick={clickLike} />
        </div>
      </div>
      <div className="dislike-wrapper">
        <div className="button-wrapper">
          <Button name="Dislike" type="button" onClick={clickDislike} />
        </div>
        <div className="number-dislike">{numberOfDislikes}</div>
      </div>
      <div className="reset-wrapper">
        <div className="button-wrapper">
          <Button name="Reset Results" type="button" onClick={resetResults} />
        </div>
      </div>
    </div>
  );
}
export default Feedback;
