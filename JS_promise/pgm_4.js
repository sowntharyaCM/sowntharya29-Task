// Promise settled with reject
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
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
  .catch(error => console.error(error))
