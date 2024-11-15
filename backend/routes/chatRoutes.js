const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {accessChat, createGroupChat, renameGroup, addToGroup, removeFromGroup, fetchChats, deleteUser} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/user/:userId").delete(deleteUser);

module.exports = router;