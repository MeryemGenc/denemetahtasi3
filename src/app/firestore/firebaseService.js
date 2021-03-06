import firebase from '../config/firebase'

export function signInWithEmail(creds) {
  return firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
}

export function signOutFirebase(creds) {
  return firebase.auth().signOut()
}
