const fs=require("fs");
const path=require("path");
let types={
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    if(srcPath==undefined){
        srcPath=process.cwd();
    }
    let organizeFiles=path.join(srcPath,"organizeFiles");
    // console.log(srcPath);

    if(fs.existsSync(organizeFiles)){
        console.log("folder alredy exist");
    }   
    else{
        fs.mkdirSync(organizeFiles);
    }
 
    let Allfiles=fs.readdirSync(srcPath);
    for(let i=0;i<Allfiles.length;i++){
        // let ext=Allfiles[i].split(".")[1];
        
        // console.log(ext);
        let fullpathfile=path.join(filepath,Allfiles[i])
        if(fs.lstatSync(fullpathfile).isFile()){
            let ext=Allfiles[i].split(".")[1];
            // console.log(ext);
            let foldername=getFolderName(ext);
            // console.log(Allfiles[i]+"   "+foldername);
            copyFileToDest(srcPath, fullpathfile, foldername);
        }
    }
    
}
 
function getFolderName(ext) {
    for(key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
    return("mislenius");
}

function copyFileToDest(srcPath, fullpathfile, foldername) {
    let destfolder=path.join(srcPath, "organizeFiles", foldername);

    if(!fs.existsSync(destfolder)){
        fs.mkdirSync(destfolder);
    }

    let filename=path.basename(fullpathfile);
    let destination=path.join(destfolder,filename);

    fs.copyFileSync(fullpathfile,destination);
}

module.exports={
    organize:organize
}