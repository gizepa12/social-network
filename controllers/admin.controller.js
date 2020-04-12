const

    path = require('path'), 
    { adminService } = require(path.join(__dirname, '..', 'services'));

exports.createAd = (req, res, next) => {
console.log('adversr controller..');
adminService.addAdvertisement(req.userId,req.body)
      .then(result => {
    res.json({ message: "You have successfully created advertisement"});
}).catch(err => res.send(err));
}

 exports.editAdvertisement =async (req,res,next) => {
     
    await adminService.editAdvertisement(req.body)
     .then((result) => {
         res.json({message:"you have successfully edited"});
    //     // res.redirect('/create-ad')

  }).catch(err => console.log(err));
 }

 exports.deleteAdv = (req,res,next) => {
     adminService.deleteAd(req.params.id)
     .then(result => {
        res.json({ message: "You have successfully deleted advertisement"});
       //  res.redirect(console.log('You have successfully delete advertisement'))
     }).catch(err => console.log(err));
 }


 exports.getAdv =async (req,res,next) => {
 
   res.json( await  adminService.getAdvertisement(req.params.id));


 }
