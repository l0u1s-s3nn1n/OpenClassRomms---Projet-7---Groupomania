const router = require("express").Router();
const authController = require ("../controllers/auth.controller");
const userController = require ('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require("multer");
const upload = multer();

//auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);


//user route controller
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete("/:id", userController.deleteUser);
// patch : mettre à jour le tableau à l'interieur d'un user
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

// upload
router.post('/upload', upload.single('file'), uploadController.uploadProfil);
module.exports = router;