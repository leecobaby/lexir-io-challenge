import { IconMinus, IconPlus } from '@assets/index'
import { FC } from 'react'

interface PropsType {
  count: number
  price: number
  onClick: (type: string) => void
}

export const ProductAmount: FC<PropsType> = ({ count, price, onClick }) => {
  return (
    <div className="flex flex-row justify-center items-center h-full">
      <button
        className="flex justify-center items-center w-10 h-full bg-secondary-300"
        onClick={() => onClick('minus')}
      >
        <IconMinus height={24} />
      </button>
      <div className="flex justify-center items-center w-16 h-full bg-secondary-300">{count}</div>
      <button
        className="flex justify-center items-center w-10 h-full bg-secondary-300"
        onClick={() => onClick('plus')}
      >
        <IconPlus height={24} />
      </button>
    </div>
  )
}
