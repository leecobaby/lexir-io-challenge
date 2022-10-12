import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import { ProductHighlight } from '@components/index'

const Product: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Lexir Frontend Assessment!</a>
      </h1>

      <ProductHighlight />
    </>
  )
}

export default Product
