for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('Capture' + projectData[i].id + '.png')
  } else {
    console.log('no-preview.png')
  }
}


function createTitle (title) {
  console.log('Title' + title)
}
function createThumbnail () {}
