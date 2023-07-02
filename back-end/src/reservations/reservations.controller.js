const service = require("./reservations.service")

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  const date = req.query.date;
  const mobile_number = req.query.mobile_number
  console.log("controller")

  // if (mobile_number) {
  const data = await service.list()
  // }
  console.log(data)
  res.json({data});
}

module.exports = {
  list: asyncErrorBoundary(list),
};
