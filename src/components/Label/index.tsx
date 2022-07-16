import clx from 'classnames'

interface Props {
  children: String
  error?: boolean
  htmlFor?: string
  alt?: boolean
  className?: string
}

function Label({
  children,
  error = false,
  htmlFor,
  alt = false,
  className,
  ...props
}: Props) {
  return (
    <label className="label" htmlFor={htmlFor} {...props}>
      <span
        className={clx(
          {
            'label-text': !alt,
            'label-text-alt': alt,
            'text-error': error,
            'text-primary': !error && !className?.includes('text-'),
          },
          className
        )}
      >
        {children}
      </span>
    </label>
  )
}

export default Label
