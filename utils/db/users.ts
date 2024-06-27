import { collection, addDoc, getDocs, DocumentData, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const addUser = async (name: string, email: string, service: string, phoneNo: string): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name,
      email,
      service,
      phoneNo
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const fetchUsers = async (): Promise<DocumentData[]> => {
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'users'));
    const users: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (e) {
    console.error('Error fetching documents: ', e);
    return [];
  }
};