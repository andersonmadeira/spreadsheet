import React, { useCallback, useState } from 'react'
import CellHeader from './CellHeader'
import CellData from './CellData'
import Row from './Row'
import styles from '../styles/Sheet.module.scss'

const Sheet = () => {
  const [selectedCell, setSelectedCell] = useState(null)

  console.log(selectedCell)

  const handleCellSelection = useCallback(
    (cellId) => {
      setSelectedCell(cellId)
    },
    [setSelectedCell],
  )
  return (
    <table className={styles.sheet}>
      <tbody>
        <Row>
          <CellHeader />
          <CellHeader label="A" />
          <CellHeader label="B" />
          <CellHeader label="C" />
          <CellHeader label="D" />
          <CellHeader label="E" />
        </Row>
        <Row>
          <CellHeader label="1" />
          <CellData
            id="A1"
            selected={selectedCell === 'A1'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="B1"
            selected={selectedCell === 'B1'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="C1"
            selected={selectedCell === 'C1'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="D1"
            selected={selectedCell === 'D1'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="E1"
            selected={selectedCell === 'E1'}
            handleSelection={handleCellSelection}
          />
        </Row>

        <Row>
          <CellHeader label="2" />
          <CellData
            id="A2"
            selected={selectedCell === 'A2'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="B2"
            selected={selectedCell === 'B2'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="C2"
            selected={selectedCell === 'C2'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="D2"
            selected={selectedCell === 'D2'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="E2"
            selected={selectedCell === 'E2'}
            handleSelection={handleCellSelection}
          />
        </Row>

        <Row>
          <CellHeader label="3" />
          <CellData
            id="A3"
            selected={selectedCell === 'A3'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="B3"
            selected={selectedCell === 'B3'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="C3"
            selected={selectedCell === 'C3'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="D3"
            selected={selectedCell === 'D3'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="E3"
            selected={selectedCell === 'E3'}
            handleSelection={handleCellSelection}
          />
        </Row>

        <Row>
          <CellHeader label="4" />
          <CellData
            id="A4"
            selected={selectedCell === 'A4'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="B4"
            selected={selectedCell === 'B4'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="C4"
            selected={selectedCell === 'C4'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="D4"
            selected={selectedCell === 'D4'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="E4"
            selected={selectedCell === 'E4'}
            handleSelection={handleCellSelection}
          />
        </Row>

        <Row>
          <CellHeader label="5" />
          <CellData
            id="A5"
            selected={selectedCell === 'A5'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="B5"
            selected={selectedCell === 'B5'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="C5"
            selected={selectedCell === 'C5'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="D5"
            selected={selectedCell === 'D5'}
            handleSelection={handleCellSelection}
          />
          <CellData
            id="E5"
            selected={selectedCell === 'E5'}
            handleSelection={handleCellSelection}
          />
        </Row>
      </tbody>
    </table>
  )
}

export default Sheet
