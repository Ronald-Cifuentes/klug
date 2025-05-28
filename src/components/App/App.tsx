import './App.scss'

import { AppProps } from './interfaces'
import { FC } from 'react'
import klug from '@/assets/klug.svg'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <div className='AppContainer' data-testid={dataTestId}>
      {klug && <img src={klug} />}
    </div>
  )
}

export default App
