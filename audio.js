document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgm");
  console.log("audio element:", audio);
  console.log("audio src:", audio?.src);

  async function startAudio() {
    console.log("trying to play...");
    try {
      await audio.play();
      console.log("PLAYING ✅");
    } catch (e) {
      console.log("PLAY BLOCKED/ERROR ❌", e);
    }
  }

  window.addEventListener("pointerdown", startAudio, { once: true });
  window.addEventListener("keydown", startAudio, { once: true });
});