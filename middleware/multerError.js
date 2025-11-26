import { MulterError } from "multer";

export const multerErrorHander = (err, req, res, next) => {
  if (err instanceof MulterError) {
    return res.status(400).send(`Image Error: ${err.message} : ${err.code}`);
  } else if (err) {
    return res.status(500).send(`Something went worng: ${err.message}`);
  }

  next();
};
