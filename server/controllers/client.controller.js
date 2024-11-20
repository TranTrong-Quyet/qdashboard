import Product from "../models/product.model.js";
import ProductStat from "../models/productStats.model.js";
import User from "../models/user.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({ productId: product._id });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    if (productWithStats) {
      res.status(200).json(productWithStats);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
