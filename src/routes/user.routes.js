import { Router } from "express";
import {
  registerUser,
  updateAccountDetails,
  loginUser,
  logoutuser,
  getdata,
  refreshAccessToken,
  getWatchHistory,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { varifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secures route
router.route("/logout").post(varifyJWT, logoutuser);

//refresh accesstoken
router.route("/refreshtoken").post(varifyJWT, refreshAccessToken);

//get all data
router.route("/getdata").get(getdata);

//change password
router.route("/change-password").post(varifyJWT, changeCurrentPassword);

//get current user
router.route("/currentuser").get(varifyJWT, getCurrentUser);

//update account details
router.route("/update-account").patch(varifyJWT, updateAccountDetails);

//update avatar
router
  .route("/update-avatar")
  .patch(varifyJWT, upload.single("avatar"), updateUserAvatar);

//update coverImage
router
  .route("/update-coverImage")
  .patch(varifyJWT, upload.single("coverImage"), updateUserCoverImage);

//get user profile
router.route("/c/:username").get(varifyJWT, getUserChannelProfile);

//get watchhistory

router.route("/hostory").get(varifyJWT, getWatchHistory);

export default router;
