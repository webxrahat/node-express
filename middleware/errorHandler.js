export const errorHandler = (err, req, res, next) => {
  const statusCode = res.status ? res.status : 500;

  res
    .staus(statusCode)
    .json({ succes: false, stack: err.stack, message: err.message });
};
