import React from "react";

const Notify = () => {
  return (
    <div className="notify-stage">
      <div>
        <img src="img/ayoogunseinde.png" alt="" />
      </div>
      <div className="post-words nott">
        <p>
          <div>
            <b>Ayo olasenhinde </b>
            <span> started following you</span>
          </div>
          <i className="time-time">2h</i>
        </p>
      </div>
      <div className="time-butt">
        <button>View</button>
      </div>
    </div>
  );
};

export default Notify;
