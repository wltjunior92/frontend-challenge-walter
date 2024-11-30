import { useState } from 'react'

import chevronUp from '../../../assets/chevronUp.svg'
import noImage from '../../../assets/noImage.png'
import { MenuItem, Section } from '../../../store/reducers/menuReducer'
import { AccordionItem } from './AccordionItem'
import styles from './styles.module.css'

type SectionAccordionProps = {
  onSelectItem: (item: MenuItem) => void
  section: Section
  isSelected: boolean
}

export function SectionAccordion({
  onSelectItem,
  section,
  isSelected,
}: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(isSelected)

  const toggleOpenCloseAccordion = () => {
    setIsOpen(open => !open)
  }

  const price = (sectionItem: Section['items'][number]) => {
    if (sectionItem.price !== 0) {
      return sectionItem.price
    } else if (sectionItem.modifiers) {
      return sectionItem.modifiers
        .reduce((sum, modifier) => {
          const lowestPrice = Math
            .min(...modifier.items.map(item => item.price))
          return sum + lowestPrice
        }, 0)
    }
    return 0
  }

  return (
    <div className={styles.accordion_item}>
      <div
        className={styles.accordion_title}
        onClick={toggleOpenCloseAccordion}
      >
        <span>{section.name}
        </span>
        <div>
          <img
            style={{
              transform: `
              rotate(${!isOpen
                ? '180deg'
                : '0deg'})
              `,
            }} src={chevronUp}
          />
        </div>
      </div>
      {(isSelected || isOpen) &&
        <div className={styles.accordion_content}>
          {section.items.map(item => (
            <AccordionItem
              key={item.id}
              onSelect={() => onSelectItem(item)}
              name={item.name}
              description={item.description}
              price={price(item)}
              image={item.images && item.images.length > 0
                ? item.images[0].image
                : noImage}
            />
          ))}
        </div>}
    </div>
  )
}
