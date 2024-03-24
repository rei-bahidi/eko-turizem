import { user_route } from './user.route.js' 
import express from 'express'
export const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('This is my api!!!')
})

app.use('/api', user_route)
// app.use('/api', )
//think about what the app is going to be for, so that the database and the api can be mapped 