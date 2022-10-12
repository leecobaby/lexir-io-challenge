import { FC } from 'react'
import styles from './Button.module.css'

interface PropsType {
  /** default = small , large = full */
  size?: 'default' | 'small' | 'medium' | 'large' | 'full'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  model?: 'default' | 'input'
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: FC<PropsType> = ({
  size = 'default',
  type = 'button',
  model = 'default',
  onClick,
  disabled,
  children
}) => {
  return (
    <button
      className={`${styles['btn-primary']} ${styles['btn-size-' + size]} ${
        styles['btn-model-' + model]
      }`}
      type={type}
      disabled={disabled}
      data-text={children}
    >
      {children}
    </button>
  )
}
