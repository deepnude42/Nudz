const {Command, flags} = require('@oclif/command')

class PushToFtpCommand extends Command {
  async run() {
    const {flags} = this.parse(PushToFtpCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\apps\\PersonalApps\\Test02\\DownloaderCLI\\src\\commands\\PushToFTP.js`)
  }
}

PushToFtpCommand.description = `Describe the command here
...
Extra documentation goes here
`

PushToFtpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PushToFtpCommand
