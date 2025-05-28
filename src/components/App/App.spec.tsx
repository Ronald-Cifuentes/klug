import { cleanup, render, screen } from '@testing-library/react'

describe('<App />', () => {
  beforeEach(() => {
    cleanup()
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('#1. Renders container and <img> when klug is truthy', () => {
    // Mock the SVG import to return a non‐empty string path
    jest.mock('@/assets/klug.svg', () => 'mocked-klug.svg')
    const App = require('./App').default

    render(<App />)
    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument()

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toMatch(/mocked-klug\.svg$/)
  })

  test('#2. Does not render <img> when klug is an empty string', () => {
    // Mock the SVG import to return an empty string
    jest.mock('@/assets/klug.svg', () => '')
    const App = require('./App').default

    render(<App />)
    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument()

    // Since klug is falsy, no <img> should exist
    expect(screen.queryByRole('img')).toBeNull()
  })

  test('#3. Renders with a custom dataTestId and still shows <img>', () => {
    // Mock the SVG import again to be a valid (truthy) string
    jest.mock('@/assets/klug.svg', () => 'mocked-klug.svg')
    const App = require('./App').default

    render(<App dataTestId='custom-id' />)
    const customApp = screen.getByTestId('custom-id')
    expect(customApp).toBeInTheDocument()

    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
