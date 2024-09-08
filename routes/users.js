const router = require("express").Router();
const { getUser, getActiveUser, updateUser } = require("../controllers/users");

router.get("/:userId", getUser);
router.get("/me", getActiveUser);
router.patch("/me", updateUser);

module.exports = router;
