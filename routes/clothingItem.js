const router = require("express").Router();
const {
  createItem,
  getItems,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");
const {
  validateClothingItem,
  validateId,
} = require("../middlewares/validation");

router.post("/", auth, createItem, validateClothingItem);
router.get("/", getItems);
router.delete("/:itemId", auth, deleteItem, validateId);
router.put("/:itemId/likes", auth, likeItem, validateId);
router.delete("/:itemId/likes", auth, dislikeItem, validateId);

module.exports = router;
