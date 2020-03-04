
const express = require('express');
const router = express.Router();
let data = require('../data/data.json');



router.get('/albums', (req, res)=>{
    
    let pagePhotos = [];
    data.albums.forEach((albumsObj)=>{
        
        pagePhotos = pagePhotos.concat(albumsObj.coverImage)
    })

    res.render('albums', {
        pageTitle: 'Albums List',
        pageID: 'albumsList',
        coverImage: pagePhotos,
        albumName: '',
        allAlbums: data.albums
    })
})

router.get('/albums/:albumid', (req, res)=>{

    let pagePhotos = [];
    let pageAlbums = [];

    data.albums.forEach((albumsObj)=>{

        if(albumsObj.albumName == req.params.albumid){
            pageAlbums.push(albumsObj);
            pagePhotos = albumsObj.coverImage
        }
    })


    res.render('albums', {
        pageTitle: 'Albums List',
        pageID: 'pageAlbums',
        coverImage: pagePhotos,
        albumName: pageAlbums[0].albumName,
        allAlbums: pageAlbums
    })


})


module.exports = router;