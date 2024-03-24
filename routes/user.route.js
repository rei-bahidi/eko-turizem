import express from 'express'
export const user_route = express.Router()


user_route.get('/user', (req, res) => {
    res.send("Hey man youre a user")
})

user_route.post('/user', (req, res) => {

})

user_route.delete('/user', (req, res) => {


})