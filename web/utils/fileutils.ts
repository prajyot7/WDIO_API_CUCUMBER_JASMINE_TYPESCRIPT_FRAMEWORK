import path from "path";

const fs = require('fs');
let zipper = require('zip-local');
export class FileUtils{
    async deleteDirectory(path: string){
        if (await fs.existsSync(path)) {
            await fs.rmdirSync(path, { recursive: true })
            await console.log(`Removed directory: ${path} !!!`)
        }
    }
}
export const zipFolder = (sourceFolder: string, targetFolder: string) => {
    zipper.zip(sourceFolder, (error: any, zipped: any) => {
        if (!error) {
            zipped.compress();
            zipped.save(targetFolder, (err: any) => {
                if (!err) console.log("Folder zipped successfully !!!");
            });
        }
    });
}

export const parseJsonFile = (filepath: string) => {
    const directory = path.join('web/resources/', filepath)
    const jsonData = fs.readFileSync(directory)
    let  eshop = JSON.parse(jsonData)
    console.log('eshop data from json file: ',eshop);
    return eshop
}
