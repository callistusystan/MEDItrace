import firebase from 'firebase';

export function uploadImage(file) {
    const storageRef = firebase.storage().ref();

    storageRef.put(file).then(snapshot => {
        console.log('Uploaded a blob or file!');
    });
};