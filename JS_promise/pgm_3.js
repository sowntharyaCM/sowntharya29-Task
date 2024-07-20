// Promise constructor
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
})

// Consuming the Promise
doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
