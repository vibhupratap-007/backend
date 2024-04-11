require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "vibhupratap",
    "id": 19766167,
    "node_id": "MDQ6VXNlcjE5NzY2MTY3",
    "avatar_url": "https://avatars.githubusercontent.com/u/19766167?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vibhupratap",
    "html_url": "https://github.com/vibhupratap",
    "followers_url": "https://api.github.com/users/vibhupratap/followers",
    "following_url": "https://api.github.com/users/vibhupratap/following{/other_user}",
    "gists_url": "https://api.github.com/users/vibhupratap/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vibhupratap/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vibhupratap/subscriptions",
    "organizations_url": "https://api.github.com/users/vibhupratap/orgs",
    "repos_url": "https://api.github.com/users/vibhupratap/repos",
    "events_url": "https://api.github.com/users/vibhupratap/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vibhupratap/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vibhu Pratap",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2016-06-05T22:04:01Z",
    "updated_at": "2020-05-30T00:57:23Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vibhucom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at vibhu and code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>chai aur code </h2>")
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})