const {Command, flags} = require('@oclif/command')
const fs = require('fs');
const moveFile = require('move-file');
const isNumber = require('is-number');
class MoveFilesCommand extends Command {
  async run() {


    const {flags} = this.parse(MoveFileCommand)
    const Source = flags.source || '//192.168.0.12/Kapow/DocumentImaging/LTLPOD' 
    const Dest = flags.dest || '//192.168.0.12/Kapow/DocumentImaging/LTLPODHARDPUSH' 
    // String directoryName = @"//192.168.0.12/Kapow/DocumentImaging/LTLPOD";
    // String newDirectoryName = @"//192.168.0.12/Kapow/DocumentImaging/LTLPODHARDPUSH"
    const regexInput = flags.regex || /([a-zA-Z]*)(\d*)([a-zA-Z]*)\d.*\.(.*)/;
    const NewNameOrder = flags.order || 'BOL,2,3,.,4'
    const useRegx = flags.useRegex || 'No';
    this.log(`Source: ${Source}  |  Dest: ${Dest}`)
  

    async function Mover (Source,Dest) {
      await moveFile(Source, Dest);
      console.log(`${Source} \n   Renamed to ${Dest}`);
    }

    // recursively scan directory
    fs.readdir(Source, function(err, items) {
      for (var i in items) {
        const filename = items[i];

        const formattedSource = `${Source}/${filename}`
        const formattedDest = `${Dest}${filename}`
        console.log("=============================");
        if(useRegx === "Yes"){
        const matches = filename.match(regexInput);
        console.log(`\n${regexInput}`);

        const renameArr = NewNameOrder.split(",");
        let newName = '';
        for(var x in renameArr){
          if(!isNumber(renameArr[x])){
            newName += renameArr[x]
          } else {
            newName += matches[parseInt(renameArr[x])]
          }
        }
        const newDest = `${Dest}/${newName}`

        Mover(formattedSource,newDest).then((result) =>{
          console.log(result);
        });
        console.log(`\n\nSource:   ${formattedSource}\nDest:   ${newDest}\n`);

      } else {
            Mover(formattedSource,formattedDest).then((result) =>{
              console.log(result);
            }).catch((err)=> {
              console.log(err);
            });
      }
        console.log("=============================");
      }
  });
  }
}

MoveFilesCommand.description = `Describe the command here
...
Extra documentation goes here
`

MoveFilesCommand.flags = {
  source: flags.string({char: 's', description: 'Source Directory'}),
  dest: flags.string({char: 'd', description: 'Destination Directorys'}),
  regexPattern: flags.string({char: 'p', description: 'RegexPattern'}),
  useRegx: flags.string({char: 'r', description: 'Use Regex to rename file? ( Yes | No )'}),
  order: flags.string({char: 'o', description: 'Comma Delimited list containing filename order from regex groups. ex 1,2,3,.,BOL = 123.bol'}),

}

module.exports = MoveFilesCommand
