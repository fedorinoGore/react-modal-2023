import { LazyComponent } from './LazyModal'
import { ModalMap } from './types'

interface IModalProviderProps {
  children: React.ReactNode
}

const MODALS: ModalMap = {
  TestModal: {
    id: 'TestModal',
    open: true
  },
  LoginModal: {
    id: 'LoginModal',
    open: true,
    meta: {
      user: 'fedor'
    }
  }
}

export function ModalProvider(props: IModalProviderProps) {
  const modals = Object.keys(MODALS).filter((id) => MODALS[id].open)

  return (
    <>
      {modals.map((filename) => (
        <LazyComponent key={filename} filename={filename} />
      ))}
      {props.children}
    </>
  )
}
