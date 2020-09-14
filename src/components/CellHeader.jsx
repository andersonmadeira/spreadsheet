import React from 'react'
import styles from '../styles/CellHeader.module.scss'

const CellHeader = ({ label }) => {
  return (
    <div className={styles.cell_header} aria-label={label || undefined}>
      {label}
    </div>
  )
}

export default React.memo(CellHeader)
