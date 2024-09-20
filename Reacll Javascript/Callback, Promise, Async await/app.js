function walkDog() {
  return new Promise((resolve, reject) => {
      setTimeout(() =>  {
        resolve("I walked the dog")
    }, 2000)
  })
}
function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{ 
      resolve("I clean the kitchen")
    },1000)
  })
}
function takeOutTheTrash() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("I take out the trash")
    },1500)
  })
}
function cleanTheTable() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("I clean the table")
    },1500)
  })
}

// walkDog().then((data) =>{console.log(data); return cleanTheKitchen})
//           .then((data) => {console.log(data); return takeOutTheTrash})
//           .then((data) => {console.log(data); return cleanTheTable })
//           .then((data) => {console.log(data); console.log("I finished the job")})
// walkDog().then((data) => {console.log(data); return cleanTheKitchen()})
//           .then((data) =>{console.log(data); return takeOutTheTrash()})
//           .then((data) => {console.log(data); return cleanTheTable()})
//           .then((data) => {console.log(data); console.log("I finished the job")})


const doTheChorse = async () => {
    try{
      const walkDogJob = await walkDog();
      console.log(walkDogJob);

      const cleanTheKitChenJob = await cleanTheKitchen();
      console.log(cleanTheKitChenJob);

      const takeOutTheTrashJob = await takeOutTheTrash();
      console.log(takeOutTheTrashJob);

      const cleanTheTableJob = await cleanTheTable();
      console.log(cleanTheTableJob);
      console.log("I finished the job")
    }
    catch(error){
        console.log(error);
    }
}

doTheChorse();