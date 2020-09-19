import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import styles from '../styles/CellData.module.scss'

const CellData = ({
  id,
  selected,
  inEditionMode,
  handleBlur,
  handleSelection,
}) => {
  const [cellValue, setCellValue] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    if (inEditionMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inEditionMode])

  return (
    <div
      className={classnames(
        styles.cell_data,
        selected ? styles.selected : null,
      )}
      role="presentation"
      onClick={() => handleSelection(id)}
    >
      {inEditionMode ? (
        <input
          ref={inputRef}
          style={{ width: '100%' }}
          className={styles.value_editor}
          value={cellValue}
          onChange={(event) => setCellValue(event.target.value)}
          onBlur={() => handleBlur(id)}
        />
      ) : (
        <span className={styles.value_viewer}>{cellValue}</span>
      )}
    </div>
  )
}

export default React.memo(CellData)
