const 
    path = require('path'),
    router = require('express').Router(),
    { userController } = require(path.join(__dirname, '..','controllers'));;

router.post("create-post", userController.createPost );
router.get("/posts", userController.getAllPosts)
router.post("/follow/:uid", userController.followuser );
router.post("/posts", userController.getAllPosts)

module.exports = router;
