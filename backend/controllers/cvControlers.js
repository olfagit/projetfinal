const cv = require("../models/cv");

exports.Addcv = async (req, res) => {
  try {
    const onecv = new cv(req.body);
    await onecv.save();
    res.status(200).send({ msg: "cv saved successfully",onecv });
  } catch (error) {
    res.status(500).send("cv not saved");
  }
};
exports.getcv = async (req, res) => {
  try {
    const onecv = await cv.find();
    res.status(200).send({ msg: "this is cv", onecv });
  } catch (error) {
    res.status(500).send("cv not found");
  }
};
exports.updatecv = async (req, res) => {
  try {
    const onecv = await cv.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated product", onecv });
  } catch (error) {
    res.status(500).send("cv not updated");
  }
};
exports.deletcv = async (req, res) => {
  try {
    await cv.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "cv deleted successfully" });
  } catch (error) {
    res.status(500).send("cv not deleted");
  }
};
