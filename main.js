const x = fetch('https://fakestoreapi.com/products')


x.then(
     (x)=>{
         return x.json()
     }
).then(
     (x)=>{
        // console.log(x)
         return x
     }
)
.then((y)=>{
      console.log(y)
})

 .catch(
     (err)=>{
         console.log(err)
         console.log("Error found")
     }
 )

console.log("Code Executed")
