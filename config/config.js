


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Nos conectamos a MongoDb')
})
.catch((error)=>{
    console.log(error);
})