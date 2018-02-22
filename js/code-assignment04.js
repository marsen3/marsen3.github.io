let projectArray1 = [
  1,
  'http://arcg.is/2mK7lpE',
  'Book Assignment 01',
  'Three points of interest pertaining to my life.',
  true ]

let projectObject1 = {
  id: 1,
  url: 'http://arcg.is/2mK7lpE',
  title: 'Book Assignment 01',
  desc: 'Three points of interest pertaining to my life.',
  thumb: true, }

let projectArray2 = [
  2,
  'http://www.arcgis.com/apps/View/index.html?appid=56470d3e779e4e8bb6ad3a849ff7b382',
  'Book Assignment 02',
  'World map is updated weekly with earthquakes.',
  true,
  ['Earthquakes', 'World Maps', 'Code Assignment4'] ]

let projectObject2 = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=56470d3e779e4e8bb6ad3a849ff7b382',
  title: 'Book Assignment 02',
  desc: 'World map is updated weekly with earthquakes.',
  thumb: true,
  keywords: ['Earthquakes', 'World Maps', 'Code Assignment4'] }

console.log(projectArray1[1])
console.log(projectObject1.title)
console.log(projectObject1["Book Assignment 01"])


console.log(projectArray2[1])
console.log(projectObject2.title)
console.log(projectObject2["Book Assignment 02"])
