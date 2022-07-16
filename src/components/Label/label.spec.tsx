import React from 'react'
import { describe, test, expect } from 'vitest'

import { render } from '../../tests/utils'

import Label from '.'

describe('Label', () => {
  test('Should render the label', () => {
    const { getByText, container } = render(<Label>Email</Label>)

    expect(getByText('Email')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should render color primary correct', () => {
    const { container } = render(<Label>Email</Label>)

    expect(container.querySelector('span')).toHaveClass('text-primary')
  })

  test('Should render color error correct', () => {
    const { container } = render(<Label error>Email</Label>)

    expect(container.querySelector('span')).toHaveClass('text-error')
  })

  test('Should render custom color correct', () => {
    const { container } = render(<Label className="text-info">Email</Label>)

    expect(container.querySelector('span')).toHaveClass('text-info')
  })
})
