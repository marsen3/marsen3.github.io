let projectArray = [
  1,
  'https://example.com',
  'Project Title',
  'Project description.',
  true
]

let projectObject = {
  id: 1,
  url: 'https://example.com',
  title: 'Project Title',
  desc: 'Project description.',
  thumb: true,
}

let projectArray = [
  1,
  'https://example.com',
  'Project Title',
  'Project description.',
  true,
  ['keyword here', 'buzzword', 'another keyword']
]

let projectObject = {
  id: 1,
  url: 'https://example.com',
  title: 'Project Title',
  desc: 'Project description.',
  thumb: true,
  keywords: [
    'keyword here',
    'buzzword', 
    'another keyword'
  ]
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["title"])
