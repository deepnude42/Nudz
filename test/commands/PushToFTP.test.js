const {expect, test} = require('@oclif/test')

describe('PushToFTP', () => {
  test
  .stdout()
  .command(['PushToFTP'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['PushToFTP', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
