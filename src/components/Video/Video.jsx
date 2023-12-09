import React, { useEffect, useState } from 'react';
import { getMovieVideo } from 'components/API/getFilm';
import YouTube from 'react-youtube';

function Video({ id }) {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getMovieVideo(id)
      .then((data) => {
        return setVideo(data.results)
      }).catch(err => console.error(err));
  }, [id]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      modestbranding: 1,
      autoplay: 1,
      enablejsapi: 1,
      origin: document.location.origin,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return video.length > 0 && <YouTube
    videoId={video[0].key}
    opts={opts}
    onReady={_onReady} />;
};

export default Video;
