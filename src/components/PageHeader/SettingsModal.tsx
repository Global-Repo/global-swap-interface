import React from 'react'
import { Modal } from '@duhd4h/global-uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import styled from 'styled-components'

type SettingsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, translateString }: SettingsModalProps) => {
  return (
    <Modal title={translateString(1200, 'Settings')} onDismiss={onDismiss}>
      <Top >
        <SlippageToleranceSetting translateString={translateString} />
        <TransactionDeadlineSetting translateString={translateString} />
      </Top>
    </Modal>
  )
}

export default SettingsModal

const Top = styled.div`
  position: relative;
  &:nth-child(){
    position:absolute;
    z-index:3 !important;
  }
  
`
