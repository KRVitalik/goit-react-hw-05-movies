import { getMovieVideo } from 'components/API/getFilm';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

function Video ({id}) {
    const [video, setVideo] = useState('')

    console.log(video)

            useEffect(() => {
        getMovieVideo(id)
            .then((data) => {
                return setVideo(data.results[0].key)
        }).catch(err => console.error(err));
        }, [id])

    const opts = {
      height: '390',
      width: '640',
        playerVars: {
          modestbranding: 1,
          autoplay: 0,
      },
    };

     const _onReady = (event) => {
    event.target.pauseVideo();
  }

    return <YouTube
        videoId={video}
        opts={opts}
        onReady={_onReady} />;
  }

export default Video
