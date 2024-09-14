const { Router } = require("express");
const {
  getAllOfProducts,
  getProductById,
  sendNewProduct,
  changeProductById,
  delateProductsById,
} = require("../controllers/products.controllers");
const router = Router();
/**
 *  @URL : /product/
 * @Status : PUBLIC
 * @Method : GET
 * @Description : get all Products
 */
router.get("/", getAllOfProducts);
/**
 *  @URL : /product/:id
 * @Status : PUBLIC
 * @Method : GET
 * @Description : get one Product by id Products
 */
router.get("/:id", getProductById);
/**
 *  @URL : /product/
 * @Status : PUBLIC
 * @Method : POST
 * @Description : add new Product
 */
router.post("/", sendNewProduct);
/**
 *  @URL : /product/:id
 * @Status : PUBLIC
 * @Method : PATCH
 * @Description : update a product
 */
router.patch("/:id", changeProductById);
/**
 *  @URL : /product/:id
 * @Status : PUBLIC
 * @Method : DELETE
 * @Description : delete a product
 */
router.delete("/:id", delateProductsById);
module.exports = router;
