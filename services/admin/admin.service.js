const 

    path = require('path'),
    { Ad, User, Post } = require(path.join(__dirname, '..', '..', 'models')),
    filterService = require(path.join(__dirname, '..', 'shared')),
    userService = require(path.join(__dirname, '..', 'user'));


 async function addAdvertisement(id,advData) {

const advertisement = new Ad({
   text : advData.text,
   link:advData.link,
   postby: advData.postby,
   datepublished:advData.datepublished,
   targetedUser: advData.age,
   targetedUser: advData.location
});
    
 let ad_ =   await advertisement.save();
 
 await userService.updateUser(id, {adId:ad_._id});


}




async function getAdvertisement(id) {
return await  Ad.findById({_id: id});

}


  

module.exports = {
    addAdvertisement,
    editAdvertisement,
    deleteAd,
    getAdvertisement
}