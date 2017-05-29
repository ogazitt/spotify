# Spotify API example using node, the Spotify API, and promises
Get an href to a song using the Spotify API, by searching for the artist and song name

A config.json file is required by the code, and should look like:

```
{
  "SPOTIFY_CLIENT_ID": "...",
  "SPOTIFY_CLIENT_SECRET": "...",
  "SPOTIFY_ACCESS_TOKEN": "..."
}
```

Only the client ID and secret are required.  If the access token is specified, the code will
use that; otherwise the client authorization workflow is used to obtain an access token that is valid 
for an hour.
