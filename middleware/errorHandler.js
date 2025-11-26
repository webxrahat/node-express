export const errorHandler = (err, req, res, next) => {
  const statusCode = res.status ? res.status : 500;

  res
    .status(500)
    .json({ succes: false, stack: err.stack, message: err.message });
};
