let projectData = []

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
