import { Request, Response } from "express";
import * as admin from "firebase-admin";

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      res.status(400).json({ message: "Missing idToken" });
      return;
    }

    // Verifikasi token dengan Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ uid: decodedToken.uid, message: "Login successful" });
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error });
  }
};
