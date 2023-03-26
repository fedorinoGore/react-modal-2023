import { BaseModal } from '../BaseModal'
import './login.css'

export interface ILoginModalProps {
  onClose?: () => void
}

export default function LoginModal(props: ILoginModalProps) {
  return (
    <BaseModal title="Sign In" show closeOnTap>
      <div className="login-modal-content">
        <div>
          <input
            style={{ fontFamily: 'Montserrat' }}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign In</button>
      </div>
    </BaseModal>
  )
}
