
export const spinningIcon = () => {
    const icon = document.querySelectorAll(".top-skill img")[2];
    icon.classList.add("spinning");
}

export const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/10koZg-s9pbBwwUwb5CpcGHH7-kLuGEub/view?usp=sharing", "_blank");
};
