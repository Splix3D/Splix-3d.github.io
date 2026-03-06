const link = "https://splix3d.w3spaces.com"
function Download() {
confirm1 = confirm("Do you want to download?")
  if (confirm1) {
link.download()
  } else {
    console.log("Download Canceled")
  }
}
