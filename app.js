import { ErrorHandler, NotFoundError } from "./utils/error-Handling.js";

import express from "express";
import router from "./router/index.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(NotFoundError);
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("Server run on port:3000");
});
