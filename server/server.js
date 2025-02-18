const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  // TODO: Implement calling discogs api
  const release = {
    "id": 483354,
    "year": 1996,
    "uri": "https://www.discogs.com/release/483354-Oxigyzer-I-Deep-Flow",
    "artists": [
      {
        "name": "Oxigyzer",
        "id": 46435
      }
    ],
    "labels": [
      {
        "name": "Loep Records",
        "catno": "loep 005",
        "id": 5682
      }
    ],
    "formats": [
      {
        "name": "Vinyl",
        "qty": "1",
        "descriptions": [
          "12\""
        ]
      }
    ],
    "title": "Deep Flow",
    "country": "Netherlands",
    "released": "1996",
    "released_formatted": "1996",
    "videos": [
      {
        "uri": "https://www.youtube.com/watch?v=0mW5lhNs82c",
        "title": "Oxigyzer -  Deep Flow",
        "description": "Oxigyzer - Oxigyzer I - Deep Flow\r\nLabel:Loep Records\r\nCatalog#:loep 005\r\nFormat:Vinyl, 12\r\n\r\nCountry:Netherlands\r\nReleased:1996 \r\nGenre:Electronic \r\nStyle:House",
        "duration": 513,
        "embed": true
      },
      {
        "uri": "https://www.youtube.com/watch?v=WxwL0yewDEY",
        "title": "Oxigyzer - Colored Life",
        "description": "Oxigyzer - Oxigyzer I - Deep Flow\nLabel:Loep Records\nCatalog#:loep 005\nFormat:Vinyl, 12\n\nCountry:Netherlands\nReleased:1996 \nGenre:Electronic \nStyle:House",
        "duration": 441,
        "embed": true
      },
      {
        "uri": "https://www.youtube.com/watch?v=Ht7OJbuoFq0",
        "title": "Oxigyzer -  Oxidation",
        "description": "Oxigyzer - Oxigyzer I - Deep Flow\r\nLabel:Loep Records\r\nCatalog#:loep 005\r\nFormat:Vinyl, 12\r\n\r\nCountry:Netherlands\r\nReleased:1996 \r\nGenre:Electronic \r\nStyle:House",
        "duration": 450,
        "embed": true
      }
    ],
    "genres": [
      "Electronic"
    ],
    "styles": [
      "House",
      "Progressive House"
    ],
    "tracklist": [
      {
        "position": "A",
        "title": "Deep Flow",
        "extraartists": [],
        "duration": "7:49"
      },
      {
        "position": "B1",
        "title": "Colored Life",
        "extraartists": [],
        "duration": "7:14"
      },
      {
        "position": "B2",
        "title": "Oxidation",
        "extraartists": [],
        "duration": "7:14"
      }
    ],
    "images": [
      {
        "type": "primary",
        "uri": "https://i.discogs.com/eIir_jCNhaPcy32YqyDAdK0qNY7v66SAitX1olJGnNM/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MzM1/NC0xNjc2Nzk4NDM2/LTgzMDUuanBlZw.jpeg",
        "resource_url": "https://i.discogs.com/eIir_jCNhaPcy32YqyDAdK0qNY7v66SAitX1olJGnNM/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MzM1/NC0xNjc2Nzk4NDM2/LTgzMDUuanBlZw.jpeg",
        "uri150": "https://i.discogs.com/fXi6Dc_aLT7wProENB6XaXfb_q_u3duyRVqMOV6CLzo/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MzM1/NC0xNjc2Nzk4NDM2/LTgzMDUuanBlZw.jpeg",
        "width": 600,
        "height": 596
      }
    ],
    "thumb": "https://i.discogs.com/fXi6Dc_aLT7wProENB6XaXfb_q_u3duyRVqMOV6CLzo/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MzM1/NC0xNjc2Nzk4NDM2/LTgzMDUuanBlZw.jpeg"
  };

  console.log('GET /api is called');
  res.json(release);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
