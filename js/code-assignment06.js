for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  createThumbnail (projectData[i].thumb, projectData[i].id)
}


function createTitle (title) {
  console.log('Title' + title)
}

function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('Capture' + id + '.png')
  } else {
    console.log('no-preview.png')
  }
}
