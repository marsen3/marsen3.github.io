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
