import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import styles from '../styles/CellData.module.scss'

const CellData = ({ id, selected, handleSelection }) => {
  const [cellValue, setCellValue] = useState('')
  const [isInEditionMode, setIsInEditionMode] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (isInEditionMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isInEditionMode])

  return (
    <div
      className={classnames(
        styles.cell_data,
        selected ? styles.selected : null,
      )}
      role="presentation"
      onClick={() => handleSelection(id)}
      onDoubleClick={() => {
        setIsInEditionMode(!isInEditionMode)
      }}
    >
      {isInEditionMode ? (
        <input
          ref={inputRef}
          style={{ width: '100%' }}
          className={styles.value_editor}
          value={cellValue}
          onChange={(event) => setCellValue(event.target.value)}
          onBlur={() => setIsInEditionMode(false)}
          onKeyUp={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter')
              setIsInEditionMode(false)
          }}
        />
      ) : (
        <span className={styles.value_viewer}>{cellValue}</span>
      )}
    </div>
  )
}

export default React.memo(CellData)
