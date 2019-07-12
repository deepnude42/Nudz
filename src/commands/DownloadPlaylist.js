const {Command, flags} = require('@oclif/command')
const scrapy = require('../helpers/src/lib/scrapy')
const config = require('../helpers/src/config.json')
const log = require('../helpers/src/lib/log')
const chalk = require('chalk');
const boxen = require('boxen');

class DownloadPlaylistCommand extends Command {
  async run() {
    console.log(chalk.white.bgBlue(boxen('|     Pornhub CLI     |', {padding: 5, margin: 1, borderStyle: 'double'})));

    const {flags} = this.parse(DownloadPlaylistCommand)
    const name = flags.name || '/playlist/17842802'
    const downloadDir = flags.DownloadDir || 'G:\\My_apps\\WeStream.Free\\Resin\\Collection' //'./downloads'
    const playlists = flags.Playlists || ''
    this.log(chalk.red(playlists));

    this.log(chalk.blue(`\nStarting Download for https://pornhub.com${name} \n     To:  ${downloadDir}\n`));

    const page = config.page || 1;
    const search = config.search;
  
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
        log.info(`Found ${keys.length} files`);
        for(const i in keys){
          const info = await scrapy.findDownloadInfo(keys[i]);
          console.log(info);
        }
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
      process.exit(0);
    }
  }
}

DownloadPlaylistCommand.description = `Describe the command here
...
Extra documentation goes here
`

DownloadPlaylistCommand.flags = {
  name: flags.string({char: 'n', description: 'Directory to download from Ex: playlist/10774261 to download all videos in playlist pornhub.com/playlist/10774261 '}),
  DownloadDir: flags.string({char: 'd', description: 'Directory to download the files to'}),
}

module.exports = DownloadPlaylistCommand
