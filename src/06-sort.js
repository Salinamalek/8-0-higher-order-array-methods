/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  const runtimeAsc = songs.sort((a, b) => {
    if (a.runtimeInSeconds < b.runtimeInSeconds){
      return -1
    }
    return 1
  })
  return runtimeAsc
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  const sortedSong = songs.sort((a, b) => {
    
    const artist1 = a.artist.toLowerCase()
    const artist2 = b.artist.toLowerCase()

    if (artist1 > artist2){
      return -1
    }
    return 1
  })
  return sortedSong
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  const sortedSongTitle = songs.sort((a, b) => {
    
    const songTitle1 = a.title.toLowerCase()
    const songTitle2 = b.title.toLowerCase()

    if (songTitle1 < songTitle2){
      return -1
    }
    return 1
  })
  return sortedSongTitle
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
