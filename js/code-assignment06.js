projectData = []

projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2mK7lpE',
  title: 'Book Assignment 01',
  desc: 'Three points of interest pertaining to my life.',
  thumb: true,
  keywords: ['New Orleans', 'Cities', 'Interest']
}

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
