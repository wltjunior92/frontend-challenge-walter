import minusIcon from '../../assets/minusIcon.svg'
import plusIcon from '../../assets/plusIcon.svg'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../store/reducers/applicationReducer'
import { formatCurrency } from '../../utils/formatCurrency'
import styles from './styles.module.css'

export function Chart() {
  const chart = useAppSelector(state => state.application.chart)
  const restaurantData = useAppSelector(state => state.restaurantData)

  const dispatch = useAppDispatch()

  function handleIncreaseItemQuantity(id: number) {
    dispatch(increaseItemQuantity(id))
  }

  function handleDecreaseItemQuantity(id: number) {
    console.log(id)
    dispatch(decreaseItemQuantity(id))
  }

  if (chart.items.length === 0) {
    return (
      <div className={styles.container}>
        <h3>Carrinho</h3>
        <div className={styles.content}>
          <span>Seu carrinho está vazio</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h3>Carrinho</h3>
      <div className={styles.content}>
        {chart.items.map(item => (
          <div key={item.id} className={styles.chart_item}>
            <div>
              <section>
                <strong>{item.name}</strong>
                {item.modifiers.map(mod => (
                  <p key={mod.itemId}>{mod.itemName}</p>
                ))}
              </section>
              <span>
                {
                  formatCurrency(restaurantData.locale, restaurantData.ccy)
                    .format(item.total)
                }
              </span>
            </div>
            <section>
              <button
                type="button"
                onClick={() => handleDecreaseItemQuantity(item.id!)}
              >
                <img src={minusIcon} alt="" />
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => handleIncreaseItemQuantity(item.id!)}
              >
                <img src={plusIcon} alt="" />
              </button>
            </section>
          </div>
        ))}
      </div>
      <div className={styles.subtotal}>
        <span>Sub total:</span>
        <strong>
          {
            formatCurrency(restaurantData.locale, restaurantData.ccy)
              .format(chart.subtotal)
          }
        </strong>
      </div>
      <footer className={styles.total}>
        <span>Total:</span>
        <strong>
          {
            formatCurrency(restaurantData.locale, restaurantData.ccy)
              .format(chart.total)
          }
        </strong>
      </footer>
      <div className={styles.checkout_button}>
        <button type="button">
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
