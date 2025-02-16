import { Release } from "../../types/Release.ts";
import React, { useEffect, useState } from "react";
import styles from './ReleaseShow.module.scss';
import { MdPlayArrow, MdShuffle } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";

const ReleaseShow: React.FC = () => {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(response => response.json())
      .then(data => setRelease(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles['release-show']}>
      {release ? (
        <>
          {release.images.length > 0 && (
            <img
              src={release.images[0].uri}
              alt="Cover"
              className={styles['release-show__image']}
            />
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

          <div className={styles['release-show__buttons']}>
            <button><MdPlayArrow /></button>
            <button><MdShuffle /></button>
            <button><FiMoreVertical /></button>
          </div>

          {release.videos?.length > 0 ? (
            release.videos.map((video) => (
              <p key={video.uri}>{video.title}</p>
            ))
          ) : (
            release.tracklist?.map((track) => (
              <p key={track.position}>{track.position} - {track.title}</p>
            ))
          )}

          {(release.labels?.length > 0 || release.released_formatted) && (
            <p>
              {release.labels?.length
                ? release.labels
                  .map((label: { name: string; catno: string }) =>
                    `${label.name} - ${label.catno}`
                  )
                  .join(', ')
                : ''}
              {release.labels?.length && release.released_formatted ? ' | ' : ''}
              {release.released_formatted || []}
            </p>
          )}

          {release.country && (
            <p>{release.country}</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default ReleaseShow;
