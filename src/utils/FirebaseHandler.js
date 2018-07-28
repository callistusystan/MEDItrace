import firebase from 'firebase';

export async function uploadImage(file) {
    const storageRef = firebase.storage().ref();

    await storageRef.put(file);
    console.log('Uploaded a blob or file!');
};