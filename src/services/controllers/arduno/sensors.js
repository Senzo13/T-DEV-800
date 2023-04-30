const getSensorById = async (req, res) => {
  const { id } = req.params;
  const sensor = await _sensors.default.findById(id).populate("user");
  res.status(200).json(sensor);
};

const getSensorAll = async (req, res) => {
  const sensor = await _sensors.default.find().populate("user");
  res.status(200).json(sensor);
};
