// ./TestModal/TestModal.tsx

import { BaseModal } from '../BaseModal'

export interface ITestModalProps {
  onClose?: () => void
}

export default function TestModal(props: ITestModalProps) {
  return (
    <BaseModal title="Test Modal" show closeOnTap>
      I'm a test modal window, so why don't you close me?
    </BaseModal>
  )
}
