function walkDog() {
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve("You walked the dog")
    }, 1500)
  })
}

function takeOutTrash() {
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve("You took out the trash")
    }, 2500)
  })
}

function cleanKitchen() {
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve("You cleaned the kitchen")
    }, 2500)
  })
}
walkDog().then(value=>{console.log(value); return takeOutTrash()})
.then(value=>{console.log(value); return cleanKitchen()})
.then(value=>{console.log(value); console.log("YOU FINISHED!")})
