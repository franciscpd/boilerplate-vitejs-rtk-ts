import { useMemo } from 'react'
import clx from 'classnames'
import {
  Form as FormControl,
  Input as InputBase,
  InputProps as InputBaseProps,
} from 'react-daisyui'

import Label from '../Label'

export type InputProps = {
  label?: string
  name: string
  error?: string | undefined
  fullWidth?: boolean | undefined
  labelClassName?: string
  errorClassName?: string
  formControlClassName?: string
} & InputBaseProps

function Input({
  label,
  fullWidth,
  name,
  error,
  className,
  labelClassName,
  errorClassName,
  formControlClassName,
  color: colorParam = 'primary',
  ...props
}: InputProps) {
  const isError = useMemo(() => !!error, [error])
  const color = useMemo(
    () => (isError ? 'error' : colorParam),
    [colorParam, isError]
  )

  return (
    <FormControl
      className={clx('mt-4', { 'w-full': fullWidth }, formControlClassName)}
    >
      {label && (
        <Label error={isError} htmlFor={name} className={labelClassName}>
          {label}
        </Label>
      )}
      <InputBase
        color={color}
        name={name}
        {...props}
        className={clx(
          'text-gray-500',
          className,
          `focus:outline-offset-0 focus:outline-0 focus:border-${color} focus:ring-${color} focus:shadow-none`
        )}
      />
      {error && (
        <Label error={isError} alt className={errorClassName}>
          {error}
        </Label>
      )}
    </FormControl>
  )
}

export default Input
