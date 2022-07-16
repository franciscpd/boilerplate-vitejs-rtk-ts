import InputField from '../InputField'

function App() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t border-primary rounded lg:max-w-md">
        <InputField name="email" type="email" label="E-mail" />
        <InputField name="password" type="password" label="Senha" />
      </div>
    </div>
  )
}

export default App
