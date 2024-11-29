import styles from './styles.module.css'

type AccordionItemProps = {
  onSelect: () => void
}

export function AccordionItem({ onSelect }: AccordionItemProps) {
  return (
    <button type="button" className={styles.container} onClick={onSelect}>
      <div className={styles.content}>
        <strong>Hardcore</strong>
        <p>
          180g angus beef burger, with shredded ribs,
          gruyere cheese, caramelized onions,
          lettuce, confit tomato, special house bread,
          served with fried cassava and passion fruit chipotle.
        </p>
        <span>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(parseFloat('33.00'))
          }
        </span>
      </div>
      <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png" />
    </button>
  )
}
