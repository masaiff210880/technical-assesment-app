import React from 'react'
import MainWrapper from '../layouts/MainWrapper'
import ScanProgress from '../components/common/scan-component/ScanProgress'
import ScanConsole from '../components/common/scan-component/ScanConsole'

function Scan() {
  return (
    <MainWrapper>
        <ScanProgress/>
        <ScanConsole/>
    </MainWrapper>
  )
}

export default Scan