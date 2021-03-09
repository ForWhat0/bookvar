import animationButton from "./animation";
import { useEffect } from "react";

export const BubbleBg = () => {
  useEffect(() => {
    animationButton();
  }, []);
  return (
    <div className="wrapper">
      <div id="parallax-lvl-3">
        <div id="b0-1" className="bubble size3">
          &nbsp;
        </div>
        <div id="b0-2" className="bubble size2">
          &nbsp;
        </div>
        <div id="b0-3" className="bubble size1">
          &nbsp;
        </div>
        <div id="b0-4" className="bubble size4">
          &nbsp;
        </div>
        <div id="b0-5" className="bubble size3">
          &nbsp;
        </div>
        <div id="b0-6" className="bubble size2">
          &nbsp;
        </div>
        <div id="b0-7" className="bubble size2">
          &nbsp;
        </div>
        <div id="b0-8" className="bubble size1">
          &nbsp;
        </div>
      </div>
    </div>
  );
};
