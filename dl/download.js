var fileObject = "";
var data = {};
var fileName = "";

function SetdlOptions(inFileName) {
  data = {
    //Keep this up to date with files
    files: [
      {
        fileName: "ESDlang.zip",
        gDriveLink: "None",
        directLink: "es/ESDlang.zip",
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
        directLink: "es/Stronge._v0.5.zip",
        GitHubLink: "None",
      },
    ],
  };

  try {
    fileObject = data.files.find((file) => file.fileName === inFileName);
  } catch {
    document.getElementById("h2FileDisp").innerHTML = "That File Doesn't Exist.";
    console.log(data);
  }

  let gdLink = document.getElementById("gDriveLink");
  let dLink = document.getElementById("directLink");
  let ghLink = document.getElementById("GitHubLink");

  // Extract the relevant information
  try {
    fileName = fileObject.fileName;
  } catch {
    document.getElementById("h2FileDisp").innerHTML = "That File Doesn't Exist.";
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
    ghLink.href = ghLink;
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
