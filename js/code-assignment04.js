let projectArray = [
  1,
  'http://arcg.is/2mK7lpE',
  'Book Assignment 01',
  'Three points of interest pertaining to my life.',
  true
]

let projectObject = {
  id: 1,
  url: 'http://arcg.is/2mK7lpE',
  title: 'Book Assignment 01',
  desc: 'Three points of interest pertaining to my life.',
  thumb: true,
}

let projectArray = [
  1,
  'http://arcg.is/2mK7lpE',
  'Book Assignment 01',
  'Three points of interest pertaining to my life.',
  true,
  ['keyword here', 'buzzword', 'another keyword']
]

let projectObject = {
  id: 1,
  url: 'http://arcg.is/2mK7lpE',
  title: 'Book Assignment 01',
  desc: 'Three points of interest pertaining to my life.',
  thumb: true,
  keywords: [
    'keyword here',
    'buzzword',
    'another keyword'
  ]
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["Book Assignment 01"])
