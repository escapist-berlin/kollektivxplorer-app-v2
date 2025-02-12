import { Release } from "../../types/Release.ts";
import React, { useEffect, useState } from "react";
import './ReleaseShow.module.scss'

const ReleaseShow: React.FC = () => {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(response => response.json())
      .then(data => setRelease(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {release ? (
        <>
          <h1>{release.title}</h1>
          <h2>{release.artists.map((artist: { name: string }) => artist.name).join(', ')}</h2>
          {release.images.length > 0 && (
            <img src={release.images[0].uri} alt="Cover" />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default ReleaseShow;
