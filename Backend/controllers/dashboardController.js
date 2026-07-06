const Analysis=require("../models/analysisModel");

exports.getDashboardStats = async (req, res) => {
  try {
    // Total analyses
    const totalAnalysis = await Analysis.countDocuments({
      user: req.userId,
    });

    // All analyses
    const analyses = await Analysis.find({
      user: req.userId,
    });

    // Average ATS
    const totalATS = analyses.reduce(
      (sum, item) => sum + item.atsScore,
      0
    );

    const averageATS =
      analyses.length > 0
        ? Math.round(totalATS / analyses.length)
        : 0;

    // Recent 3 analyses
    const recentAnalysis = await Analysis.find({
      user: req.userId,
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .select("resumeName role atsScore createdAt");

    res.json({
      success: true,
      totalAnalysis,
      averageATS,
      recentAnalysis,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};