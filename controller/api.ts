import { Request, Response } from "express";
import { fetchUserData, updateUserData } from "../repository/userCollection";

// Mengambil data user dari Firestore
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  console.log(`Fetching user data for ID: ${id}`);

  try {
    const user = await fetchUserData(id);
    console.log("Fetched User:", user);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// Mengupdate data user di Firestore
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await updateUserData(id, req.body);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
