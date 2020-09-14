import React, { useCallback, useState } from 'react'
import CellHeader from './CellHeader'
import CellData from './CellData'
import styles from '../styles/Sheet.module.scss'

const Sheet = ({ lines, columns }) => {
  const [selectedCell, setSelectedCell] = useState(null)

  const handleCellSelection = useCallback(
    (cellId) => {
      setSelectedCell(cellId)
    },
    [setSelectedCell],
  )

  const dataGrid = Array(lines + 1)
    .fill()
    .map(() => Array(columns + 1).fill())

  const cells = dataGrid.map((line, lineIndex) =>
    line.map((column, columnIndex) => {
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
          key={`${String.fromCharCode(65 + columnIndex - 1)}${lineIndex}`}
          id={`${String.fromCharCode(65 + columnIndex - 1)}${lineIndex}`}
          selected={
            selectedCell ===
            `${String.fromCharCode(65 + columnIndex - 1)}${lineIndex}`
          }
          handleSelection={handleCellSelection}
        />
      )
    }),
  )

  return (
    <div
      className={styles.sheet}
      style={{ gridTemplateColumns: `repeat(${columns + 1}, 1fr)` }}
    >
      {cells}
    </div>
  )
}

export default Sheet
