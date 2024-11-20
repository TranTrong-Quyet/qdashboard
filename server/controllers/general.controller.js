import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      throw new Error("Error getting user");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
