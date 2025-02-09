import { Artist } from "./Artist.ts";
import { Video } from './Video';
import { Format } from './Format';
import { Label } from './Label';
import { Track } from './Track';
import { Community } from './Community';
import { Image } from './Image';

export interface Release {
  release: {
    images: Image[];
    title: string;
    artists: Artist[];
    formats: Format[];
    year: number;
    genres: string[];
    styles: string[];
    videos: Video[];
    released_formatted: string;
    labels: Label[];
    country: string;
    tracklist: Track[];
    community: Community;
  };
}