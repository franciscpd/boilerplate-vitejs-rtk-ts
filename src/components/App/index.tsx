import { Button } from 'react-daisyui'

import { increment } from '../../features/counter/counter-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import logo from '../../logo.svg'

import './styles.css'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(increment())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button animation color="primary" onClick={handleClick}>
            count is: {count}
          </Button>
        </p>
      </header>
    </div>
  )
}

export default App
