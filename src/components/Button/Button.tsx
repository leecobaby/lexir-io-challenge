import { FC } from 'react'
import stylesBtn from './Button.module.css'
import stylesBtnInput from './ButtonInput.module.css'

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
  onClick,
  model,
  disabled,
  children
}) => {
  let className =
    model === 'input'
      ? `${stylesBtnInput['btn-primary']} ${stylesBtnInput['btn-size-' + size]}`
      : `${stylesBtn['btn-primary']} ${stylesBtn['btn-size-' + size]}`

  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
