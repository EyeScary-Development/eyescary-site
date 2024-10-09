var fileObject = "";
var data = {};
var fileName = "";

function SetdlOptions(inFileName) {
  data = {
    //Keep this up to date with files
    files: [
      {
        fileName: "ESDLang.zip",
        gDriveLink: "None",
        directLink: "es/ESDLang.zip",
        GitHubLink: "None",
      },
      {
        fileName: "ESDLarch.zip",
        gDriveLink: "None",
        directLink: "es/ESDLarch.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.1.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.1.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.2.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.2.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.3.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.3.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.4.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.4.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.5.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.5.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.6.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.6.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.7.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.7.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.8.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.8.zip",
        GitHubLink: "None",
      },
      {
        fileName: "Stronge_v0.9.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.9.zip",
        GitHubLink:
          "https://github.com/EyeScary-Development/Stronge-Releases/archive/refs/tags/v0.9.0.zip",
      },
      {
        fileName: "Stronge_v0.10.zip",
        gDriveLink: "None",
        directLink: "es/Stronge_v0.10.zip",
        GitHubLink:
          "https://github.com/EyeScary-Development/Stronge-Releases/archive/refs/tags/v0.10.0.zip",
      },
    ],
  };

  try {
    fileObject = data.files.find((file) => file.fileName === inFileName);
  } catch {
    document.getElementById("h2FileDisp").innerHTML =
      "That File Doesn't Exist.";
    console.log(data);
  }

  let gdLink = document.getElementById("gDriveLink");
  let dLink = document.getElementById("directLink");
  let ghLink = document.getElementById("GitHubLink");

  // Extract the relevant information
  try {
    fileName = fileObject.fileName;
  } catch {
    document.getElementById("h2FileDisp").innerHTML =
      "That File Doesn't Exist.";
    console.log(data);
  }

  const gDriveLink = fileObject.gDriveLink;
  const directLink = fileObject.directLink;
  const GitHubLink = fileObject.GitHubLink;

  console.log("File Name:", fileName);
  console.log("Google Drive Link:", gDriveLink);
  console.log("Direct Link:", directLink);
  console.log("GitHub Link:", GitHubLink);

  if (gDriveLink == "None") {
    gdLink.href = "../";
    gdLink.innerHTML = "Google Drive Download: None";
  } else {
    gdLink.href = gDriveLink;
    gdLink.innerHTML = "Google Drive Download: " + gDriveLink;
  }

  if (directLink == "None") {
    dLink.href = "../";
    dLink.innerHTML = "Direct Download: None";
  } else {
    dLink.href = directLink;
    dLink.innerHTML = "Direct Download: " + directLink;
  }

  if (GitHubLink == "None") {
    ghLink.href = "../";
    ghLink.innerHTML = "GitHub Download: None";
  } else {
    ghLink.href = GitHubLink;
    ghLink.innerHTML = "GitHub Download: " + GitHubLink;
  }
}

function onload() {
  const urlParams = new URLSearchParams(window.location.search);
  const fileName = urlParams.get("fileName");
  console.log(fileName);
  document.getElementById("h2FileDisp").innerHTML =
    "Selected File: " + fileName;
  SetdlOptions(fileName);
}
