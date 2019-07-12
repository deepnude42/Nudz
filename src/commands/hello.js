const {Command, flags} = require('@oclif/command')
const terminalImage = require('terminal-image');

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\commands\\hello.js`)

	console.log(await terminalImage.file('BustySexyBrunetteStrippinginShower_480P_1211119066.jpg'));
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
