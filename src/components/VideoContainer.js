import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AddVideoCard info={videos[0]} />}
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

const AddVideoCard = ({ info }) => {
  return (
    <div className="border bg-yellow-400">
      <span>This is a Higher Order Component</span>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoContainer;
