const db = require('./models')

db.sync({force: true})
    .then(() => {
        console.log('Database synced!')
        //db.close() //only if using a version of node without finally
    })
    .catch(err => {
        console.log('Disaster! something went wrong! ')
        console.log(err)
    })
    .finally(() => {
        db.close()
    })