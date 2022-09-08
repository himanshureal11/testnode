const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://test:hfPqe7Go1CNOYt5n@cluster0.yunvzxh.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connection success');
      } catch (error) {
        console.log(error);
    }
}

mongoConnect()

module.exports = {
    mongoConnect
}