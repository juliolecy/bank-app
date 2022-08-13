import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Lets try our service now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repellendus itaque totam odio? Est repudiandae odit vum!</p>

        <div className={`${styles.flexCenter} sm:m1-10 m1-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </div>
    </section>
  )


export default CTA