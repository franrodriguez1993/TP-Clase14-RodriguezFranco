import { Router } from "express";

const routerCart = Router();

//~~~~~~~~~~~~~~~~CONTROLLER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import {
  createCart,
  deleteCart,
  getProductCart,
  addProductCart,
  deleteProductCart,
} from "../controllers/carrito.controller.js";

//~~~~~~~~~~~~~~~~~ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

routerCart.post("/", createCart);
routerCart.delete("/:id", deleteCart);
routerCart.post("/agregar/:idCarrito/:idProducto", addProductCart);
routerCart.get("/:id", getProductCart);
routerCart.delete("/eliminar/:idCarrito/:idProducto", deleteProductCart);
export default routerCart;
