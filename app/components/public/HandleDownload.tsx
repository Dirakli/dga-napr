import React from "react";

const HandleDownload = () => {
  const fakeFileContent = "This is my fake file content";

  const blob = new Blob([fakeFileContent], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "file.txt";

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};

export default HandleDownload;
