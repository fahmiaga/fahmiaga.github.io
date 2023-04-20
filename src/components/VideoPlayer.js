import React from 'react';
import { DefaultPlayer as Video } from "react-html5video";
import 'react-html5video/dist/styles.css'

function VideoPlayer ({ video }) {
  return (
    <Video muted
      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      poster="http://sourceposter.jpg"
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src={video} type="video/webm" />
    </Video>

  );
}

export default VideoPlayer;
