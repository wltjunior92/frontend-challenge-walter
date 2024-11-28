import styles from './styles.module.css'

export function AccordionItem() {
  return (
    <div className={styles.container}>
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
    </div>
  )
}
