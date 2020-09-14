import React from 'react'
import styles from '../styles/CellHeader.module.scss'

const CellHeader = ({ label }) => {
  return (
    <td className={styles.cell_header} aria-label={label || undefined}>
      {label}
    </td>
  )
}

export default CellHeader
