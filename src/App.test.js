import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Spreadsheet app text', () => {
  const { getByText } = render(<App />)
  const textElement = getByText(/Spreadsheet app/i)
  expect(textElement).toBeInTheDocument()
})
