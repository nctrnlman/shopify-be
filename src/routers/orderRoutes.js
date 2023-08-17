const express = require("express");
const { orderController } = require("../controllers");
const upload = require("../middleware/multer");

const app = express();

const router = express.Router();

router.get("/order-list", orderController.orderList);
router.get("/shipping-warehouse", orderController.getShippingWarehouse);
router.post("/create", orderController.createOrder);
router.post(
  "/upload-payment/:orderId",
  upload.single("image"),
  orderController.uploadPayment
);
router.put("/cancel-order/:orderId", orderController.cancelOrder);

module.exports = router;
