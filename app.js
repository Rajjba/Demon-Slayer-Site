let watchedStore = JSON.parse(localStorage.getItem("watchedEpisodes")) || [];

let episodes = Array.from(document.querySelectorAll("[type='checkbox']"));

episodes.forEach((episode) => {
  episode.addEventListener("change", updateCheckBoxes);
});

function updateCheckBoxes() {
  let watched = Array.from(
    document.querySelectorAll("[type='checkbox']:checked")
  );
  let watchedEpisodes = [];
  watched.forEach((watched) => {
      watchedEpisodes.push(watched.getAttribute("data-episode"));
  });
  localStorage.setItem("watchedEpisodes", JSON.stringify(watchedEpisodes));
}
