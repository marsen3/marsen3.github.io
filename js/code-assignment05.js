let projectData = []

projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2mK7lpE',
  title: 'Book Assignment 01',
  desc: 'Three points of interest pertaining to my life.',
  thumb: true,
  keywords: ['New Orleans', 'Cities', 'Interest']
}

projectData[1] = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=56470d3e779e4e8bb6ad3a849ff7b382',
  title: 'Book Assignment 02',
  desc: 'World map is updated weekly with earthquakes.',
  thumb: false,
  keywords: ['Earthquakes', 'World Maps', 'Code Assignment4'] }

for (let i = 0; i < projectData.length; i++) {
  console.log('Capture' + projectData[i].id + '.png') }
