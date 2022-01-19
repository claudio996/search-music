const d = document,
    $form = d.getElementById("song-search"),
    $loader = d.querySelector(".loader"),
    $main = d.querySelector(".main"),
    $error = d.querySelector(".error"),
    $artist = d.querySelector(".artist"),
    $song = d.querySelector(".song");

$form.addEventListener("submit", e => {
    e.preventDefault();

    try {
        $loader.style.display = "block";
        let artist = e.target.artist.value.toLowerCase(),
            song = e.target.artist.value.toLowerCase(),

            $artistTemplate = "",
            $songTemplate = "",

            artistAPI = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
            songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,

            artistFetch = fetch(artistAPI),
            songFetch = fetch(songAPI),

            [artistRest, songRes] = await Promise.all([artistFetch, songFetch]), //destructuration.
            artistData = await artistRest.json(),
            songData = await songRes.json();


    } catch (error) {
        console.log(error);
        let message = error.statusText || "Ocurrio un error";
        $error.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
        $loader.style.display = "none";
    }

})