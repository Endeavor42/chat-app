import { Response, Request } from "express";
import { IMessage } from "../../types/message";
import Message from "../../models/message";

// Get request
const getMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages: IMessage[] = await Message.find();
    res.status(200).json({ messages });
  } catch (error) {
    throw error;
  }
};

// Post Request
const addMessage = async (req: Request, res: Response): Promise<void> => {
  const { type, text }: IMessage = req.body;
  try {
    const message: IMessage = new Message({
      type,
      text,
    });
    const newMessage: IMessage = await message.save();
    const allMessages: IMessage[] = await Message.find();

    res.status(201).json({
      response: "Message added",
      message: newMessage,
      messages: allMessages,
    });
  } catch (error) {
    throw error;
  }
};

// Delete Request
const deleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMessage: IMessage | null = await Message.findByIdAndRemove(
      req.params.id
    );
    const allMessages: IMessage[] = await Message.find();
    res.status(200).json({
      response: "Message deleted",
      message: deletedMessage,
      messages: allMessages,
    });
  } catch (error) {
    throw error;
  }
};

export { getMessages, addMessage, deleteMessage };
