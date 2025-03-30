document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the uploaded images
    const files = document.getElementById('imageInput').files;
    const previewContainer = document.getElementById('imagePreview');
    const status = document.getElementById('status');
    const videoLength = document.getElementById('videoLength').value;
    const transition = document.getElementById('transition').value;
    const speed = document.getElementById('speed').value;

    // Clear previous previews and status
    previewContainer.innerHTML = '';
    status.innerHTML = '';

    // Show image previews
    for (const file of files) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            previewContainer.appendChild(imgElement);
        }

        reader.readAsDataURL(file);
    }

    // Simulate the video creation process with options
    status.innerHTML = `<p>Processing images with transition: ${transition}, speed: ${speed}, and video length: ${videoLength} seconds...</p>`;

    // Simulate a delay for video creation
    setTimeout(function() {
        status.innerHTML = `<p>Video created successfully! <br><a href="#">Download your video</a></p>`;
    }, 3000); // simulate 3 seconds processing time
});
