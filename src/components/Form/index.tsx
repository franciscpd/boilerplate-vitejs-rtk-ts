import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface Props {
  children: React.ReactChild | React.ReactChild[]
  type: Record<string, any>
  schema: yup.AnyObjectSchema
  onSubmit: () => {}
}

function Form({ children, type, schema, onSubmit }: Props) {
  const methods = useForm<typeof type>({
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
