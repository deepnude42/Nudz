const {Command, flags} = require('@oclif/command')

class PullFromFtpCommand extends Command {
  async run() {
    const {flags} = this.parse(PullFromFtpCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\apps\\PersonalApps\\Test02\\DownloaderCLI\\src\\commands\\PullFromFTP.js`)
  }
}

PullFromFtpCommand.description = `Describe the command here
...
Extra documentation goes here
`

PullFromFtpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PullFromFtpCommand
