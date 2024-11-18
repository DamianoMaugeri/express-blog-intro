console.log('hello')

const express = require('express')

const app = express()

const port = 3000

const posts = [
    {
        title: 'ciambellone',
        content: 'lorem lorem',
        img: './images/ciambellone.jpeg',
        tags: ['#lorem1', '#lorem2', '#lorem3']
    },
    {
        title: 'cracher barbabietola',
        content: 'lorem',
        img: './images/cracker_barbabietola.jpeg',
        tags: ['#lorem1', '#lorem2', '#lorem3']
    },
    {
        title: 'pane fritto',
        content: 'lorem',
        img: './images/pane_fritto_dolce.jpeg',
        tags: ['#lorem1', '#lorem2', '#lorem3']
    },
    {
        title: ' pasta barbabietola',
        content: 'lorem',
        img: './images/pasta_barbabietola.jpeg',
        tags: ['#lorem1', '#lorem2', '#lorem3'],
    },
    {
        title: 'torta paesana',
        content: 'lorem',
        img: './images/torta_paesana.jpeg',
        tags: ['#lorem1', '#lorem2', '#lorem3']
    },
];





app.get('/', (req, res) => {
    res.send('server del mio blog')
});


app.get('/bacheca', (req, res) => { // http://localhost:3000/bacheca
    const response = {
        results: posts,
        count: posts.length,
    };
    res.json(response);
})


// Per ultima
app.listen(port, () => {
    console.log('hello')
});