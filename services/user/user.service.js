const 
    path = require('path'),
    { User, Post, Ad } = require(path.join(__dirname, '..', '..', 'models'));

function createPost(userId, data) {

}

function  updatePost() {
    
}

function deletePost() {
    
}

function createComment() {
    
}

function updateComment(params) {
    
}

function deleteComment(params) {
    
}

async function followUser(params) {

    
}

 async function updateUser(id,update){
    console.log(id,update ,'id print');
    await User.updateOne({_id:id},{advetisements: {$push: update}});

}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment,
    followUser,
    updateUser

}





