const Analysis=require("../models/analysisModel");


const getHistory = async (req, res) => {
  try {
    const history = await Analysis.find({
      user: req.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteHistory = async (req, res) => {
  try {
    const history = await Analysis.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!history) {
      return res.status(404).json({
        message: "History not found",
      });
    }

    res.status(200).json({
      message: "History deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getHistory,
  deleteHistory,
};