
const express = require('express');
const router = express.Router();
let data = require('../data/data.json');



router.get('/albums', (req, res)=>{
    
    res.render('albums')

})


router.get('/albums/:id', (req, res)=>{

    let pagePhotos = [];
    let pageAlbums = [];
    let id = req.params.id

    


    res.render('albums', {
        allAlbums: data.albums[id],
        coverImage: pagePhotos
    })


})


module.exports = router;