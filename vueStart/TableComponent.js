
let playLists = [];
let count = 1;
function add_playlist()
{

    playLists.push("Playlist" + count++);
    var playlistOuter = $("#bottom_middlebox");
    var playList_template = $(` <div class="pad onclick="createPlaylist()">
    <div class="style">
    <span class="material-symbols-outlined">
      library_music
  </span>
    <div class="spacing"> 
    </div>
    </div>
  </div>`);
    for (let playList of playLists) {
        playList_template.find(".spacing").text(playList);
        playlistOuter.append(playList_template);
    }    
}


