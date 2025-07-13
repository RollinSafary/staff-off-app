import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, Firestore } from 'firebase/firestore';
import { getDatabase, connectDatabaseEmulator, Database } from 'firebase/database';

class FirebaseService {
  private static instance: FirebaseService;
  public readonly app: FirebaseApp;
  public readonly auth: Auth;
  public readonly firestore: Firestore;
  public readonly realtimeDb: Database;

  private constructor() {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };

    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.realtimeDb = getDatabase(this.app);

    if (import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
      this.connectToEmulators();
    }
  }

  private connectToEmulators() {
    connectAuthEmulator(this.auth, 'http://localhost:9099');
    connectFirestoreEmulator(this.firestore, 'localhost', 8090);
    connectDatabaseEmulator(this.realtimeDb, 'localhost', 9000);
  }

  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }
}

export default FirebaseService;
