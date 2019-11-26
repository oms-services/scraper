const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handler = require('./handler')

app.use(bodyParser.json())

const { PORT = 8080 } = process.env

app.post('/scrape-url-html', async (req, res) => {
  const { url, session = null } = req.body
  const html = await handler({ url, session })
  res.json(html)
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))
