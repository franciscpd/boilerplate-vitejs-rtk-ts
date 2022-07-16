import cx from 'classnames'

interface Props {
  children: String
  error?: boolean
  htmlFor?: string
  alt?: boolean
  classNames?: string
}

function Label({
  children,
  error = false,
  htmlFor,
  alt = false,
  classNames,
  ...props
}: Props) {
  return (
    <label
      className={cx(
        'label',
        {
          'text-error': error,
          'text-primary': !error,
        },
        classNames
      )}
      htmlFor={htmlFor}
      {...props}
    >
      <span className={cx({ 'label-text': !alt, 'label-text-alt': alt })}>
        {children}
      </span>
    </label>
  )
}

export default Label
