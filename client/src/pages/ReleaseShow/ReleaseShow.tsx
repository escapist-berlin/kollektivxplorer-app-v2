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
          {release.images.length > 0 && (
            <img src={release.images[0].uri} alt="Cover"/>
          )}

          <h1>{release.title}</h1>

          <h2>{release.artists.map((artist: { name: string }) => artist.name).join(', ')}</h2>

          {(release.formats?.length > 0 || release.year) && (
            <p>
              {release.formats?.length
                ? release.formats
                  .map((format: { name: string; descriptions?: string[] }) =>
                    [format.name, ...(format.descriptions || [])].join(', ')
                  )
                  .join(', ')
                : ''}
              {release.formats?.length && release.year ? ' - ' : ''}
              {release.year || []}
            </p>
          )}

          {(release.genres?.length > 0 || release.styles?.length > 0) && (
            <p>
              {release.genres?.length
                ? release.genres.join(', ')
                : ''}
              {release.genres?.length && release.styles?.length ? ': ' : ''}
              {release.styles?.length
                ? release.styles.join(', ')
                : ''}
            </p>
          )}

          <hr/>

          <div>
            <button>Play</button>
            <button>Shuffle</button>
            <div>
              <button>...</button>
              <div>
                <a href="#">Add to queue</a>
                <a href="#">Add to playlist</a>
                <a href="#">Share</a>
              </div>
            </div>
          </div>

          <hr/>

          {release.videos?.length > 0 ? (
            release.videos.map((video) => (
              <p key={video.uri}>{video.title}</p>
            ))
          ) : (
            release.tracklist?.map((track) => (
              <p key={track.position}>{track.position} - {track.title}</p>
            ))
          )}

          <hr/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default ReleaseShow;
