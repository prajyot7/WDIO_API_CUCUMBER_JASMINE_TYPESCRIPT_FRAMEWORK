const fs =require('fs');
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
    return JSON.parse(fs.readFileSync(filepath, "utf-8"))
}