document.getElementById("resumeBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "/public/Alok_Kumar_Yadav_Resume.pdf";
    link.download = "Alok_Kumar_Yadav_Resume.pdf";
    link.click();
});