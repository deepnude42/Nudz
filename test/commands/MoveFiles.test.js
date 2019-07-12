const {expect, test} = require('@oclif/test')

describe('MoveFiles', () => {
  test
  .stdout()
  .command(['MoveFiles'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['MoveFiles', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
