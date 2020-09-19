import React from 'react'
import Sheet from './components/Sheet'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Sheet lines={1000} columns={26} />
    </div>
  )
}

export default App
