let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

function getAllOfProducts(req, res) {
  res.status(200).send(products);
}
const getProductById = (req, res) => {
  const { id } = req.params;
  const parseId = parseInt(id);
  res.status(200).send(products[parseId - 1]);
};
const sendNewProduct = (req, res) => {
  const lastIdPruduct = products[products.length - 1].id;
  const newPruduct = { id: lastIdPruduct + 1, ...req.body };
  products.push(newPruduct);
  res.status(201).send(newPruduct);
};
const changeProductById = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const isExistInProduct = products.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (isExistInProduct === -1) {
    return res.status(404).json("can not find that :(");
  }
  products[isExistInProduct].name = name || products[isExistInProduct].name;
  products[isExistInProduct].price = price || products[isExistInProduct].price;
  res.status(200).send({
    message: "update blog was successfully.",
    data: products[isExistInProduct],
  });
};
const delateProductsById = (req, res) => {
  const { id } = req.params;

  const isExistBlog = products.findIndex((blog) => blog.id === parseInt(id));

  if (isExistBlog === -1) {
    return res.status(404).json({ error: "product not found!" });
  }

  products = products.filter((blog) => blog.id !== products[isExistBlog].id);
  console.log(products);

  res.status(204).end();
};
module.exports = {
  getAllOfProducts,
  getProductById,
  sendNewProduct,
  changeProductById,
  delateProductsById,
};
