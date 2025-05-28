import './App.scss'

import { AppProps } from './interfaces'
import { FC } from 'react'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <div className='AppContainer' data-testid={dataTestId}>
      <img src='src/assets/klug.svg' alt='' />
    </div>
  )
}

export default App
