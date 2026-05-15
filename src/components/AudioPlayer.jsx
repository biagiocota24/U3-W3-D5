import { useState } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsSkipStartFill,
  BsSkipEndFill,
  BsShuffle,
  BsArrowRepeat,
  BsVolumeUpFill,
} from "react-icons/bs";

const AudioPlayer = function () {
  const[isPlaying ,setIsPlaying] = useState(false)

  return (
    <>
      <div className="player-bar">
        {/*MOBILE*/}
        <div className="mobile-only flex-column w-100 d-flex d-lg-none">
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="player-thumb">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="1.5"
                width="20"
                height="20"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <div className="player-title">Nessuna traccia</div>
              <div className="player-artist">—</div>
            </div>
            <button className="player-btn" style={{ fontSize: "28px" }}>
              {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </button>
            <button className="player-btn" style={{ fontSize: "22px" }}>
              <BsSkipEndFill />
            </button>
          </div>
        </div>

        {/*DESKTOP*/}
        <div className="desktop-only d-none d-lg-flex align-items-center w-100 gap-4">
          {/*Sinistra*/}
          <div
            className="d-flex align-items-center gap-3"
            style={{ minWidth: "200px" }}
          >
            <button className="player-btn" style={{ fontSize: "15px" }}>
              <BsShuffle />
            </button>
            <button className="player-btn" style={{ fontSize: "20px" }}>
              <BsSkipStartFill />
            </button>
            <button className="player-btn" style={{ fontSize: "28px" }}>
              {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </button>
            <button className="player-btn" style={{ fontSize: "20px" }}>
              <BsSkipEndFill />
            </button>
            <button className="player-btn" style={{ fontSize: "15px" }}>
              <BsArrowRepeat />
            </button>
          </div>

          {/*Centro*/}
          <div className="flex-grow-1 d-flex align-items-center gap-2">
            <div className="desktop-progress-track">
              <div className="desktop-progress-fill" />
            </div>
            <svg
              viewBox="0 0 814 1000"
              fill="rgba(255,255,255,0.6)"
              width="16"
              height="16"
              style={{ flexShrink: 0 }}
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-105.4C115.7 835.3 65 751.4 65 669.1c0-7.8-.8-15.8-1.4-23.8C69.7 487.8 193.3 412.5 278.2 412.5c78 0 121.6 46.1 178.7 46.1 55.3 0 107.5-47.9 174.9-47.9 34.5 0 138.9 3.3 196.3 87.3zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.4 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            <div className="desktop-progress-track">
              <div className="desktop-progress-fill" />
            </div>
          </div>

          {/*Destra*/}
          <div
            className="d-flex align-items-center gap-3"
            style={{ minWidth: "200px", justifyContent: "flex-end" }}
          >
            <BsVolumeUpFill color="white" size={16} />
            <input type="range" min="0" max="100" className="volume-slider" />
            <button className="accedi-btn-player">Accedi</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
