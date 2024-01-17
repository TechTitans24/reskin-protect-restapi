import admin from "firebase-admin";
import firebaseConfig from "../config/firebaseConfig";

admin.initializeApp({
 credential: admin.credential.cert(firebaseConfig),
 databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
});

export default admin;
