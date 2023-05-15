import { useState, useEffect } from 'react';

export function resizeVideos(){
    const [videos, setVideos] = useState(8);
    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          let videos;
    
          if (screenWidth > 1399) {
            videos = 10;
          } else if (screenWidth > 1023) {
            videos = 8;
          } else if (screenWidth > 768) {
            videos = 6;
          } else if (screenWidth > 480) {
            videos = 4;
          } else {
            videos = 8;
          }
    
              setVideos(videos);
          };
          
          window.addEventListener('resize', handleResize);
          
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
      return videos
}
