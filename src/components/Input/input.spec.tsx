import React from 'react'
import { describe, test, expect } from 'vitest'

import { render } from '../../tests/utils'

import Input from '.'

describe('Input', () => {
  test('Should render the input', () => {
    const { getByPlaceholderText, container } = render(
      <Input name="email" label="E-mail" placeholder="email@test.com" />
    )

    expect(getByPlaceholderText('email@test.com')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should render color primary correct', () => {
    const { container } = render(
      <Input name="email" label="E-mail" placeholder="email@test.com" />
    )

    expect(container.querySelector('.label-text')).toHaveClass('text-primary')
    expect(container.querySelector('.input')).toHaveClass('input-primary')
    expect(container.querySelector('.input')).toHaveClass(
      'focus:border-primary'
    )
    expect(container.querySelector('.input')).toHaveClass('focus:ring-primary')
  })

  test('Should render color error correct', () => {
    const { container } = render(
      <Input
        name="email"
        label="E-mail"
        placeholder="email@test.com"
        error="Field required"
      />
    )

    expect(container.querySelector('.label-text')).toHaveClass('text-error')
    expect(container.querySelector('.input')).toHaveClass('input-error')
    expect(container.querySelector('.input')).toHaveClass('focus:border-error')
    expect(container.querySelector('.input')).toHaveClass('focus:ring-error')
    expect(container.querySelector('.label-text-alt')).toHaveClass('text-error')
  })

  test('Should render custom color correct', () => {
    const { container } = render(
      <Input
        name="email"
        label="E-mail"
        placeholder="email@test.com"
        color="info"
        labelClassName="text-info"
      />
    )

    expect(container.querySelector('.label-text')).toHaveClass('text-info')
    expect(container.querySelector('.input')).toHaveClass('input-info')
    expect(container.querySelector('.input')).toHaveClass('focus:border-info')
    expect(container.querySelector('.input')).toHaveClass('focus:ring-info')
  })
})
