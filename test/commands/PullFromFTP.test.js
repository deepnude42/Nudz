const {expect, test} = require('@oclif/test')

describe('PullFromFTP', () => {
  test
  .stdout()
  .command(['PullFromFTP'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['PullFromFTP', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
