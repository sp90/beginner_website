const contentful = require('contentful')

const SPACE_ID = 'vlledeu93sie'
const ACCESS_TOKEN = '8a022ec6496956cdb0f316b6b1aaeacb384a690ff2a3f59799a2575603b25b84'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

client.getEntries({content_type: '2wKn6yEnZewu2SCCkus4as'})
  .then(entries => {
    console.log(entries.items.length)
  }, err => {
    console.log("err: ", err)
  })