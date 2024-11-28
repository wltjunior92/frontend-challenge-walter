import { useState } from 'react'

import chevronUp from '../../../assets/chevronUp.svg'
import { AccordionItem } from './AccordionItem'
import styles from './styles.module.css'

export function SectionAccordion() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpenCloseAccordion = () => {
    setIsOpen(open => !open)
  }

  return (
    <div className={styles.accordion_item}>
      <div
        className={styles.accordion_title}
        onClick={toggleOpenCloseAccordion}
      >
        <span>Burguers
        </span>
        <div>
          <img
            style={{
              transform: `rotate(${!isOpen
            ? '180deg'
            : '0deg'})`,
            }} src={chevronUp}
          />
        </div>
      </div>
      {isOpen &&
        <div className={styles.accordion_content}>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>}
    </div>
  )
}
