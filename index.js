import inquirer from "inquirer";
import chalk from "chalk";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    feulincrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player1 = await inquirer.prompt([
    {
        type: "input",
        name: "name1",
        message: "What is your name?"
    }
]);
console.log("player1 is ", player1.name1);
let opponent1 = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["skeleton", "Assassin", "zombie"]
    }
]);
console.log("opponent is ", opponent1.select);
let p1 = new player(player1.name1);
let p2 = new opponent(opponent1.select);
if (opponent1.select == "skeleton") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: "select your action",
            choices: ["Attack", "Run", "Drink health possion",]
        }
    ]);
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(p1.name), "has", p1.fuel, "left");
            console.log(chalk.bold.green(p2.name), "has", p2.fuel, "left");
        }
        if (num <= 0) {
            p2.fuelDecrease();
            console.log(chalk.bold.red(p2.name), "has", p2.fuel, "left");
            console.log(chalk.bold.green(p1.name), "has", p1.fuel, "left");
        }
        if (p2.fuel === 0) {
            console.log(chalk.italic.green("You won!"));
            process.exit(0);
        }
        if (p1.fuel === 0) {
            console.log(chalk.italic.red("You have lost!"));
            process.exit(0);
        }
    }
    if (ask.opt === "Run") {
        console.log(chalk.italic.green("Better luck next time!"));
        process.exit(0);
    }
    if (ask.opt === "Drink health possion") {
        p1.feulincrease();
    }
}
else if (opponent1.select == "Assassin") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: "select your action",
            choices: ["Attack", "Run", "Drink health possion",]
        }
    ]);
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(p1.name), "has", p1.fuel, "left");
            console.log(chalk.bold.green(p2.name), "has", p2.fuel, "left");
        }
        if (num <= 0) {
            p2.fuelDecrease();
            console.log(chalk.bold.red(p2.name), "has", p2.fuel, "left");
            console.log(chalk.bold.green(p1.name), "has", p1.fuel, "left");
        }
        if (p2.fuel === 0) {
            console.log(chalk.italic.green("You won!"));
            process.exit(0);
        }
        if (p1.fuel === 0) {
            console.log(chalk.italic.red("You have lost!"));
            process.exit(0);
        }
    }
    if (ask.opt === "Run") {
        console.log(chalk.italic.green("Better luck next time!"));
        process.exit(0);
    }
    if (ask.opt === "Drink health possion") {
        p1.feulincrease();
    }
}
else if (opponent1.select == "zombie") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: "select your action",
            choices: ["Attack", "Run", "Drink health possion",]
        }
    ]);
    if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(p1.name), "has", p1.fuel, "left");
            console.log(chalk.bold.green(p2.name), "has", p2.fuel, "left");
        }
        if (num <= 0) {
            p2.fuelDecrease();
            console.log(chalk.bold.red(p2.name), "has", p2.fuel, "left");
            console.log(chalk.bold.green(p1.name), "has", p1.fuel, "left");
        }
        if (p2.fuel === 0) {
            console.log(chalk.italic.green("You won!"));
            process.exit(0);
        }
        if (p1.fuel === 0) {
            console.log(chalk.italic.red("You have lost!"));
            process.exit(0);
        }
    }
    if (ask.opt === "Run") {
        console.log(chalk.italic.green("Better luck next time!"));
        process.exit(0);
    }
    if (ask.opt === "Drink health possion") {
        p1.feulincrease();
    }
}
