import React from 'react'
import classnames from 'classnames'
import styles from '../styles/CellData.module.scss'

const CellData = ({ id, selected, value, handleSelection }) => {
  return (
    <td
      className={classnames(
        styles.cell_data,
        selected ? styles.selected : null,
      )}
      role="presentation"
      onClick={() => handleSelection(id)}
    >
      <span className={styles.cell_data__anchor} />
      {value}
    </td>
  )
}

export default React.memo(CellData)
