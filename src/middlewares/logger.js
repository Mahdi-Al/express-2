const { format, formatDistance, formatRelative, subDays } = require("date-fns");
function logger(req, res, next) {
  console.log(
    `the request received in ${format(new Date(), "yyyy-MM-dd")} request-url: ${
      req.url
    } method: ${req.method}`
  );
  next();
}
module.exports = logger;
