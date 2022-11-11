const mongoose = require('mongoose');

    const connectToAtlas = () => {
        const DB = process.env.DB;

        mongoose
            .connect(DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('DB Connection Successful!'))
            .catch(() => console.error('App starting error'));
    }

module.exports={
    connectToAtlas
}