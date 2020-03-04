
const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

router.get('/', (req, res)=>{

    let pagePhotos = [];
    data.albums.forEach((albumsObj)=>{

        pagePhotos = pagePhotos.concat(albumsObj.coverImage)
    })

    console.log(pagePhotos)
    res.render('index', {
        
        coverImage: pagePhotos
    })

})

module.exports = router;