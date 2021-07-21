import { Router } from "express";
import {
  getMessages,
  addMessage,
  deleteMessage,
} from "../controllers/messages";

const router: Router = Router();

router.get("/messages", getMessages);

router.post("/add-messages", addMessage);

router.delete("/delete-todo/:id", deleteMessage);

export default router;
