

const fs = require("fs");
const path = require("path");
function treefu(basepath){
    if(basepath==undefined){
        console.log("enter the vailid path");
        return;
    }
    else if(fs.existsSync(basepath)){
        treehelper(basepath," ")
    }
}
function treehelper(targetAdd,indent) {
    let isFile=fs.lstatSync(targetAdd).isFile();
    if(isFile){
        let filename=path.basename(targetAdd);
        console.log(indent+"├── "+filename);
        return;
    }
    let foldername=path.basename(targetAdd);
    console.log(indent+"└──"+foldername);
    let childs=fs.readdirSync(targetAdd);
    for(let j=0;j<childs.length;j++){
        let childAdd=path.join(targetAdd,childs[j]);
        treehelper(childAdd,indent + "\t");
    }
}

module.exports = {
    tree: treefu,
};