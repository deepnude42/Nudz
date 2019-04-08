const {expect, test} = require('@oclif/test')

describe('MoveFlies', () => {
  test
  .stdout()
  .command(['MoveFlies'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['MoveFlies', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
