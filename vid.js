window.addEventListener("load", async () => {
  let video = document.querySelector("video[muted][autoplay]");
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});
