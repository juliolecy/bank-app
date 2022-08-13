import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'
import {card} from '../assets'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal 
          <br className='sm:block hidden' />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          maiores qui debitis totam necessitatibus expedita, aliquam repellendus cumque explicabo dolorem aliquid soluta ipsum molestiae?
        </p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
      
    </section>
  )


export default CardDeal