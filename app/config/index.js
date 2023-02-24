// lab 1 buoc 3
const config = {
  app: {
    port: process.env.PORT || 3000,
  },
 //lab 1 buoc 3

 
  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook"
    }    
};
module.exports = config;