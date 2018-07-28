import firebase from 'firebase';

export const uploadImage = (ref, file) => {
    const storageRef = firebase.storage().ref(ref);

    storageRef.put(file).then(snapshot => {
        console.log('Uploaded a blob or file!');
    });
};