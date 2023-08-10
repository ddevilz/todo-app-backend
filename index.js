const mongoose = require("mongoose");
const app = require("./src/app.js");
const config = require("./src/config/index.js");

(async () => {
    try {
        await mongoose.connect(config.MONGODB_URL);

        const onListening = () => {
            console.log(`Listening on ${config.PORT}`);
        };

        app.listen(config.PORT, onListening);

    } catch (error) {
        console.error("Error: ", error);
        throw error; 
    }
})();
