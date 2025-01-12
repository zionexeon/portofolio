// Template for social media cards
const socialMedias = [
  {
    url_image: "YOUR_YOUTUBE_IMAGE_URL", // Replace with your image URL
    nama_gambar: "Youtube",
    link: "YOUR_YOUTUBE_LINK", // Replace with your Youtube link
    tombol: "Kunjungi",
  },
  {
    url_image: "YOUR_INSTAGRAM_IMAGE_URL", // Replace with your image URL
    nama_gambar: "Instagram",
    link: "YOUR_INSTAGRAM_LINK", // Replace with your Instagram link
    tombol: "Kunjungi",
  },
  {
    url_image: "YOUR_GITHUB_IMAGE_URL", // Replace with your image URL
    nama_gambar: "Github",
    link: "YOUR_GITHUB_LINK", // Replace with your Github link
    tombol: "Kunjungi",
  },
  {
    url_image: "YOUR_LINKEDIN_IMAGE_URL", // Replace with your image URL
    nama_gambar: "LinkedIn",
    link: "YOUR_LINKEDIN_LINK", // Replace with your LinkedIn link
    tombol: "Kunjungi",
  },
];

// Function to render social media cards
function renderSocialMedias() {
  const grid = document.getElementById("social-media-grid");

  // Clear existing content in the grid
  grid.innerHTML = "";

  socialMedias.forEach((media) => {
    const mediaDiv = document.createElement("div");
    mediaDiv.className = "card";

    // Set the inner HTML for each card
    mediaDiv.innerHTML = `
                <div class="flex flex-col items-center">
                    <div class="mb-2">
                        <img src="${media.url_image}" alt="${media.nama_gambar}" />
                    </div>
                    <h5 class="mb-2 text-center text-xl font-bold">${media.nama_gambar}</h5>
                    <div class="flex justify-center items-center">
                        <a href="${media.link}" class="button" target="_blank">
                            ${media.tombol}
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            `;
    grid.appendChild(mediaDiv);
  });
}

// Initial render of social media cards
renderSocialMedias();
