// Add functionality to download the resume as an HTML file
document.getElementById("download-btn").addEventListener("click", () => {
  const resumeContent = document.querySelector(".resume-container").outerHTML;
  const blob = new Blob([resumeContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Resume1.pdf";
  a.click();

  URL.revokeObjectURL(url);
});
