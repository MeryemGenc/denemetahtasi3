import firebase from '../config/firebase'


const db = firebase.firestore()


export function dataFromSnapshot(snapshot){
    if (!snapshot.exists) return undefined
    const data = snapshot.data()

    // firestore dan gelen TimeStamp objesini js date objesine dönüştürmek.
    for (const prop in data) {
        if (data.hasOwnProperty(prop)) {
            if (data[prop] instanceof firebase.firestore.Timestamp ) {
                data[prop] = data[prop].toDate()
            }
        }
        
    }

    return {
        ...data,
        blogId: snapshot.id
    }
}


export function listenToBlogsFromFirestore() {
    return db.collection('blogs').orderBy('blogDate', 'desc')
}

export function listenToBlogFromFirestore(blogId) {
    return db.collection('blogs').doc(blogId) 
}

export function addBlogToFirestore(blog) {
    return db.collection('blogs').add({
        ...blog,

    })
}

export function updateBlogInFirestore(blog) {
  return db.collection('blogs').doc(blog.blogId).update(blog)
}

export function deleteBlogInFirestore(blogId) {
  return db.collection('blogs').doc(blogId).delete()
}


export function getUserProfile(userId) {
    return db.collection('users').doc(userId)
}



