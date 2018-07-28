export async function uploadImage(ref, file) {
    const snapshot = await ref.put(file);
    console.log('Uploaded a blob or file!');
    return snapshot;
};