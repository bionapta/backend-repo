import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

const USERS_COLLECTION = 'USERS';

export const fetchUserData = async (id: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(id).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUserData = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(id).update(data);
};
