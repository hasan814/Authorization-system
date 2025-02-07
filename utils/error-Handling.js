// ============= Not Found Page ===============
export const NotFoundError = (req, res, next) => {
  res.send({ statusCode: 404, message: "NotFound page" });
};

// ============= Error  Page ===============
export const ErrorHandler = (err, req, res, next) => {
  const status = err?.status ?? err?.statusCode ?? 500;
  res.send({
    statusCode: status,
    message: err?.message ?? "InternalServerError",
  });
};
