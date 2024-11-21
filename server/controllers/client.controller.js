import Product from "../models/product.model.js";
import ProductStat from "../models/productStats.model.js";
import User from "../models/user.js";
import Transaction from "../models/transaction.model.js";

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

export const getAllTransactions = async (req, res) => {
  try {
    // Extract query parameters with defaults
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // Generate formatted sort object
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };
      return sortFormatted;
    };

    const sortFormatted = sort ? generateSort() : {};

    // Find transactions with pagination and sorting
    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip((page - 1) * pageSize)
      .limit(parseInt(pageSize, 10));

    // Count total matching documents
    const total = await Transaction.countDocuments({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    });

    // Send response
    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
