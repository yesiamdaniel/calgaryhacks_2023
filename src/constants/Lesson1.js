const q = query(collection(db, "Path1/"), where("id", "==", 0));
const docs = getDocs(q).then((docs) => {  
docs.forEach((x) => {
    setPath1Data(x.data());
})       
