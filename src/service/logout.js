import firebase from "../config/firebase-config";

const logout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Sign Out Successful");
    })
    .catch((err) => {
      console.log("AN error happened");
    });
};

export default logout;
