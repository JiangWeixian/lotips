import { valuesOfEnum } from '../src'

enum Hello {
  HELLO = 'hello'
}

describe('value of enum', () => {
  test('should work', () => {
    expect(valuesOfEnum(Hello)).toMatchSnapshot();
  })
})
