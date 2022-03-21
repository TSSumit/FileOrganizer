let helpFun=require("./commands/help");
let orgfun = require("./commands/organize");
let treefun =require("./commands/tree");
let inputArr=process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree":
        treefun.tree(path);
        break;

    case "organize":
        orgfun.organize(path);
        break;

    case "help":
        helpFun.help();
        break;

    default:
        console.log("Command  not ricognized :/");
        break;
}