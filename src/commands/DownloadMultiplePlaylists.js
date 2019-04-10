const {Command, flags} = require('@oclif/command')
const scrapy = require('../helpers/src/lib/scrapy')
const config = require('../helpers/src/config.json')
const log = require('../helpers/src/lib/log')

class DownloadMultiplePlaylistsCommand extends Command {
  async run() {
    const {flags} = this.parse(DownloadMultiplePlaylistsCommand)
    const downloadDir = flags.DownloadDir || './downloads'
    const playlists = flags.Playlists || ''
    this.log(playlists)

    //this.log(`hello ${name} from D:\\apps\\PersonalApps\\Test02\\DownloaderCLI\\src\\commands\\DownloadPlaylist.js`)
    let listOfPlaylists = playlists.split(",");
    for(var i in listOfPlaylists){
    this.log(listOfPlaylists[i])

    let name = listOfPlaylists[i];
    this.log(`\nStarting Download for ${name} \n`)

    let page = config.page || 1;
    let search = config.search;
  
    try {
      while (true) {
        const opts = {
          page,
          search,
          pathname: name
        };
        const keys = await scrapy.findKeys(opts);
        if (!keys || keys.length === 0) {
          throw new Error('find nothing!');
        }
        log.info(keys);
        for (const key of keys) {
          const info = await scrapy.findDownloadInfo(key);
          if (!info) {
            log.info('can\'t find this video, downloading next one');
            continue;
          }
          const result = await scrapy.downloadVideo(info, downloadDir);
          log.info(result);
          console.log('\n');
        }
  
        page += 1;
      }
    } catch (error) {
      console.log(error);
    }
    }
  }
}

DownloadMultiplePlaylistsCommand.description = `Describe the command here
...
Extra documentation goes here
`

DownloadMultiplePlaylistsCommand.flags = {
  Playlists: flags.string({char: 'p', description: 'List of Directories'}),
  DownloadDir: flags.string({char: 'd', description: 'Directory to download the files to'}),
}

module.exports = DownloadMultiplePlaylistsCommand



/*
const {Command, flags} = require('@oclif/command')

class DownloadMultiplePlaylistsCommand extends Command {
  async run() {
    const {flags} = this.parse(DownloadMultiplePlaylistsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\apps\\PersonalApps\\Test02\\DownloaderCLI\\src\\commands\\DownloadMultiplePlaylists.js`)
  }
}

DownloadMultiplePlaylistsCommand.description = `Describe the command here
...
Extra documentation goes here
`

DownloadMultiplePlaylistsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DownloadMultiplePlaylistsCommand





*/