const {expect, test} = require('@oclif/test')

describe('DownloadMultiplePlaylists', () => {
  test
  .stdout()
  .command(['DownloadMultiplePlaylists'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['DownloadMultiplePlaylists', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
