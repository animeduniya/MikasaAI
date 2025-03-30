async function generateImage() {
  const output = document.getElementById("output");
  output.innerHTML = "⏳ Generating AI Image...";

  try {
    const response = await fetch("https://lexica.art/api/v1/search?q=anime");
    const data = await response.json();

    if (data.images && data.images.length > 0) {
      const imgUrl = data.images[0].src;
      output.innerHTML = `<img src="${imgUrl}" alt="AI Generated Image" />`;
    } else {
      output.innerHTML = "⚠️ Failed to generate image.";
    }
  } catch (error) {
    output.innerHTML = "🚨 Error generating image. Please try again.";
  }
}

function generateVoice() {
  const output = document.getElementById("output");
  output.innerHTML = "🎙 Generating AI Voice using FakeYou...";
  output.innerHTML = `<iframe src="https://fakeyou.com" width="80%" height="300px"></iframe>`;
}

function generateSong() {
  const output = document.getElementById("output");
  output.innerHTML = "🎵 Generating AI Song using Riffusion...";
  output.innerHTML = `<iframe src="https://riffusion.com" width="80%" height="300px"></iframe>`;
}
