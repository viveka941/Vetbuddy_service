import express from "express";
import { getAllUser, getUser, login, register } from "../controller/user.controller.js";
import { bookappointment, userAllAppointment } from "../controller/appointment.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/dashboard/:id").get(getUser);
router.route("/appointment/:id").post(bookappointment);
router.route("/allUser").get(getAllUser)
router.route("/userAllAppointment").get(userAllAppointment);

export default router;
