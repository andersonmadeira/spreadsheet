import React, { useCallback, useEffect, useState } from 'react'
import CellHeader from './CellHeader'
import CellData from './CellData'
import styles from '../styles/Sheet.module.scss'

const Sheet = ({ lines, columns }) => {
  const [selectedCell, setSelectedCell] = useState(null)
  const [isInEditionMode, setIsInEditionMode] = useState(false)

  const handleCellSelection = useCallback(
    (cellId) => {
      setSelectedCell(cellId)
    },
    [setSelectedCell],
  )

  const handleBlur = useCallback(() => {
    setIsInEditionMode(false)
  }, [setIsInEditionMode])

  const dataGrid = Array(lines + 1)
    .fill()
    .map(() => Array(columns + 1).fill())

  const cells = dataGrid.map((line, lineIndex) =>
    line.map((column, columnIndex) => {
      const cellId = `${String.fromCharCode(65 + columnIndex - 1)}${lineIndex}`

      if (lineIndex === 0 && columnIndex === 0) {
        return <CellHeader key="0" />
      }

      if (lineIndex === 0) {
        return (
          <CellHeader
            key={String.fromCharCode(65 + columnIndex - 1)}
            label={String.fromCharCode(65 + columnIndex - 1)}
          />
        )
      }

      if (columnIndex === 0) {
        return <CellHeader key={lineIndex} label={lineIndex} />
      }

      return (
        <CellData
          key={`${cellId}`}
          id={`${cellId}`}
          selected={selectedCell === `${cellId}`}
          inEditionMode={selectedCell === `${cellId}` && isInEditionMode}
          handleBlur={handleBlur}
          handleSelection={handleCellSelection}
        />
      )
    }),
  )

  return (
    <div
      tabIndex={-1}
      role="presentation"
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          setIsInEditionMode(!isInEditionMode)
        }
        if (e.key === 'Escape' && isInEditionMode) {
          setIsInEditionMode(false)
        }
      }}
      onDoubleClick={(e) => {
        setIsInEditionMode(true)
      }}
      className={styles.sheet}
      style={{ gridTemplateColumns: `repeat(${columns + 1}, 1fr)` }}
    >
      {cells}
    </div>
  )
}

export default Sheet
