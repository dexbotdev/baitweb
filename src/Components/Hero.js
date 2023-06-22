import React, { useEffect, useRef, useState } from "react";
import music from "../Images/music.mp3";
import play from "../Images/play.svg";
import pause from "../Images/pause.svg";
import ReactPlayer from "react-player";

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  const myFunc = () => {
    console.log("I was activated 5 seconds later");
    ref.current && ref.current.click();
  };

  useEffect(() => {
    const timeoutId = setTimeout(myFunc, 5000); // Trigger myFunc after 5 seconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout when component unmounts
  }, []);

  const playMusic = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    console.log(playing);
  }, [playing]);

  return (
    <>
      <div className="mt-5 marginAdjust pb-5" data-aos="fade-down">
        <p className="heroP pt-5">THE BAIT</p>
        <h1 className="heroh1">
          Exploring endless possibilities on Ordinals & BRC-20
        </h1>
        <button ref={ref} className="btnone" onClick={playMusic}>
          <img src={playing ? pause : play} alt="Toggle Playback" />
        </button>
        <ReactPlayer className="uns" url={music} playing={playing} />
      </div>
    </>
  );
};

export default Hero;