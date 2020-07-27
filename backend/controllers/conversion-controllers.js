const Conversion = require("../models/conversion");

const getHistorys = async (req, res, next) => {
  let conversions;
  try {
    conversions = await Conversion.find({});
  } catch (err) {
    console.log(
      "Fetching conversion historys failed, please try again later.",
      500
    );

    return next(error);
  }
  res.json({
    conversions: conversions.map(conversion =>
      conversion.toObject({ getters: true })
    )
  });
};

exports.getHistorys = getHistorys;
