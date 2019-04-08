const {expect, test} = require('@oclif/test')

describe('DownloadPlaylist', () => {
  test
  .stdout()
  .command(['DownloadPlaylist'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['DownloadPlaylist', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
