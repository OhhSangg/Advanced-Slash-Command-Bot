const mongoose = require('mongoose');
const chalk = require('chalk');

async function connect() {
    mongoose.connect("mongodb+srv://Sang:Sang280508@cluster0.ggmk0mv.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
        console.log(chalk.blue(chalk.bold(`Bot`)), (chalk.white(`>>`)), chalk.red(`MongoDB`), chalk.green(`connected!`))
    });
    return;
}

module.exports = connect