import '@testing-library/jest-dom'
import { describe, test, expect } from 'vitest'

import { render } from '../../../test/utils'
import InputField from './inputField'

describe('Input', async () => {
  test('should render the input', () => {
    const input = render(<InputField />)

    expect(input).toMatchSnapshot()
  })
})
