import storageManager from "../helpers/storageManager.js";
const cartManager = new storageManager("carrito.txt");
const productManager = new storageManager("productos.txt");

const createCart = async (req, res) => {
  const cart = { products: [] };
  try {
    await cartManager.save(cart);
    return res.json({ msg: "carrito creado con éxito." });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    await cartManager.deleteById(id);
    return res.json({ msg: "Carrito eliminado con éxito." });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const addProductCart = async (req, res) => {
  const { idCarrito, idProducto } = req.params;
  try {
    //Buscamos el producto:
    const product = await productManager.getById(idProducto);
    //Si no lo encuentra:
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado." });
    //Si todo sale bien:
    await cartManager.postById(idCarrito, product);
    return res.json({ msg: "producto agregado al carrito con éxito." });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const getProductCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cartManager.getById(id);
    return res.json(cart.products);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const deleteProductCart = async (req, res) => {
  const { idCarrito, idProducto } = req.params;
  try {
    await cartManager.selectedDelete(idCarrito, idProducto);
    return res.json({
      msg: `El producto con el id ${idProducto} fue eliminado con éxito del carrito ${idCarrito}`,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export {
  createCart,
  deleteCart,
  getProductCart,
  addProductCart,
  deleteProductCart,
};
