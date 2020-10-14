let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
    // print the names of all the songs to the console
    let songIDs=Object.keys(library.songs)
    for(i=0;i<songIDs.length; i++){
      console.log(library.songs[songIDs[i]].name)
    }
    
  },

  printSongName: function(songID) {
    // print the name of a song when given its ID
    console.log(library.songs[songID].name)
  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID 
    console.log(library.playlists[playlistID].name)
  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists 
    let playlistIDs =Object.keys(library.playlists)
    for(j=0;j<playlistIDs.length;j++){
      console.log(library.playlists[playlistIDs[j]].name)
    }
  
  },


  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given
  let playlistSongs= library.playlists[playlistID].tracks;
  console.log(playlistSongs);


  },


  addSong: function(songName, songArtist, aongAlbum) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.
    let newSong= {
      id: library.generatuUid(),
      name: songName,
      artist: songArtist,
      album: songAlubum
    }
    
    library.songs[newSong.id]
    
    
    
    
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
  this.addSongToPlaylist（playlistID)
  library.playlists[playlistID].tracks.push(songID)
  this.printPraylistSongs(playlistID)
  },







  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
  },





}



// console.log(Object.keys(library.songs))
// console.log(Object.keys(library.playlists))
// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

// console.log(library.printAllSongNames())

// library.printSongName("s02")
// library.printPlaylistName("p02")

// library.printAllSongNames()

// console.log(library.songs.s02.name)
// library.printPlaylistSongs('p01')
// library.addSong("Blue World","Mac Miller", "Circles");
library.addSongToPlaylist('s04','p01')