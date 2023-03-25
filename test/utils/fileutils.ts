const fs =require('fs');
let zipper = require('zip-local');
export class FileUtils{
    async deleteDirectory(path: string){
        if (await fs.existsSync(path)) {
            await fs.rmdirSync(path, { recursive: true })
            await console.log(`Removed directory: ${path} !!!`)
        }
    }
    async zipFolder (sourceFolder: string, targetFolder: string) {
        zipper.zip(sourceFolder, (error: any, zipped: any) => {
            if (!error) {
                zipped.compress();
                zipped.save(targetFolder, (err: any) => {
                    if (!err) console.log("Folder zipped successfully !!!");
                });
            }
        });
    }
    async parseJsonFile(filepath: string) {
        return await JSON.parse(fs.readFileSync(filepath, "utf-8"))
    }
}