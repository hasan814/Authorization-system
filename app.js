import express from "express";
import { ErrorHandler, NotFoundError } from "./utils/error-Handling";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use();
app.use(NotFoundError);
app.use(ErrorHandler);
