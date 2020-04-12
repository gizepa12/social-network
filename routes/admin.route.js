const 
    path = require('path')
    router = require('express').Router(),
    { adminController } = require(path.join(__dirname, '..','controllers'));

router.post('/create-ad', adminController.createAd);
router.post('/edit-ad', adminController.editAdvertisement);
router.get('/ads/:id', adminController.getAdv);
router.post('/delete-ad/:id', adminController.deleteAdv);
module.exports = router; 
// (req, res, next) => console.log("sdfd"),