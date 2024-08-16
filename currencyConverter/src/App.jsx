import { useState } from 'react'
import { InputBox } from './components/Box'
import {useCurrecyInfo} from './hooks/UseCurrencyInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-black text-white flex justify-center rounded-xl shadow-lg">how are you</h1>
    </>
  )
}

export default App
