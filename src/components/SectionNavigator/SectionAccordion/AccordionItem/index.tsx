import { useAppSelector } from '../../../../hooks/useAppSelector'
import styles from './styles.module.css'

type AccordionItemProps = {
  onSelect: () => void
  name: string
  description: string | undefined
  price: number
  image: string
}

export function AccordionItem({
  onSelect,
  name,
  description,
  price,
  image,
}: AccordionItemProps) {
  const restaurantData = useAppSelector(state => state.restaurantData)
  return (
    <button type="button" className={styles.container} onClick={onSelect}>
      <div className={styles.content}>
        <strong>{name}</strong>
        <p>
          {description}
        </p>
        <span>
          {
            new Intl.NumberFormat(restaurantData.locale, {
              style: 'currency',
              currency: restaurantData.ccy,
            }).format(price)
          }
        </span>
      </div>
      <img src={image} />
    </button>
  )
}
