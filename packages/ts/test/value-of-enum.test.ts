import { valuesOfEnum } from '../src'

enum Hello {
  HELLO = 'hello'
}

describe('value of enum', () => {
  test('should work', () => {
    console.log(valuesOfEnum(Hello))
    expect(valuesOfEnum(Hello)).toMatchSnapshot();
  })
})
