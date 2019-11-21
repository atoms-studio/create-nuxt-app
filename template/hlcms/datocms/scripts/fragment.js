const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
require('dotenv').config()

fetch(`https://graphql.datocms.com/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: process.env.DATOCMS_API_TOKEN,
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      (type) => type.possibleTypes !== null,
    )
    result.data.__schema.types = filteredData
    fs.writeFile(
      path.resolve('./data/api/fragmentTypes.json'),
      JSON.stringify(result.data, null, 2),
      (err) => {
        if (err) {
          console.error('Error writing fragmentTypes file', err)
        } else {
          console.log('Fragment types successfully extracted!')
        }
      },
    )
  })
  .catch((error) => {
    console.log('Check your .env DATOCMS_API_TOKEN variable', error)
  })