const getStatusById = async (req, res) => {
  const { id } = req.params;
  const status = await _status.default.findById(id).populate("user");
  res.status(200).json(status);
};

const getStatusAll = async (req, res) => {
  const status = await _status.default.find().populate("user");
  res.status(200).json(status);
};
