const {Command, flags} = require('@oclif/command')

class MoveFliesCommand extends Command {
  async run() {
    const {flags} = this.parse(MoveFliesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\apps\\PersonalApps\\Test02\\DownloaderCLI\\src\\commands\\MoveFlies.js`)
  }
}

MoveFliesCommand.description = `Describe the command here
...
Extra documentation goes here
`

MoveFliesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = MoveFliesCommand
