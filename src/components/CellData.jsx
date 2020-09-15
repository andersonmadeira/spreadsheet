import React, { useRef, useState } from 'react'
import classnames from 'classnames'
import styles from '../styles/CellData.module.scss'

const CellData = ({ id, selected, handleSelection }) => {
  const [cellValue, setCellValue] = useState('')
  const [isInEditionMode, setIsInEditionMode] = useState(false)
  const cellRef = useRef()

  return (
    <div
      ref={cellRef}
      className={classnames(
        styles.cell_data,
        selected ? styles.selected : null,
      )}
      contentEditable={isInEditionMode}
      role="presentation"
      onClick={() => handleSelection(id)}
      onDoubleClick={() => {
        setIsInEditionMode(!isInEditionMode)
      }}
    >
      {isInEditionMode ? (
        <input
          style={{ width: '100%' }}
          autoFocus
          className={styles.value_editor}
          value={cellValue}
          onChange={(event) => setCellValue(event.target.value)}
          onBlur={() => setIsInEditionMode(false)}
        />
      ) : (
        <span className={styles.value_viewer}>{cellValue}</span>
      )}
    </div>
  )
}

export default React.memo(CellData)
