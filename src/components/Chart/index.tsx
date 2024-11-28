import minusIcon from '../../assets/minusIcon.svg'
import plusIcon from '../../assets/plusIcon.svg'
import styles from './styles.module.css'

export function Chart() {
  return (
    <div className={styles.container}>
      <h3>Carrinho</h3>
      <div className={styles.content}>
        <div className={styles.chart_item}>
          <div>
            <section>
              <strong>Caipirinha</strong>
              <p />
            </section>
            <span>13.00</span>
          </div>
          <section>
            <button type="button">
              <img src={minusIcon} alt="" />
            </button>
            <span>1</span>
            <button type="button">
              <img src={plusIcon} alt="" />
            </button>
          </section>
        </div>
        <div className={styles.chart_item}>
          <div>
            <section>
              <strong>Smash Brooks</strong>
              <p>Com 2 carnes</p>
            </section>
            <span>35.00</span>
          </div>
          <section>
            <button type="button">
              <img src={minusIcon} alt="" />
            </button>
            <span>1</span>
            <button type="button">
              <img src={plusIcon} alt="" />
            </button>
          </section>
        </div>
      </div>
      <div className={styles.subtotal}>
        <span>Sub total:</span>
        <strong>48.00</strong>
      </div>
      <footer className={styles.total}>
        <span>Total:</span>
        <strong>48.00</strong>
      </footer>
    </div>
  )
}
