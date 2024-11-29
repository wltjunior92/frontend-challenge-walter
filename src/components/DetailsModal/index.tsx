import minusIcon from '../../assets/minusIcon.svg'
import plusIcon from '../../assets/plusIcon.svg'
import xIcon from '../../assets/xIcon.svg'
import { RadioInput } from '../RadioInput'
import styles from './styles.module.css'

type DetailsModalProps = {
  onClose: () => void
}

export function DetailsModal({ onClose }: DetailsModalProps) {
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          <img src={xIcon} alt="Close modal" />
        </button>
        <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png" />
        <div className={styles.content}>
          <h3>Smash Brooks</h3>
          <p>
            100g pressed hamburger, mozzarella cheese,
            pickles, red onion, grilled bacon and
            traditional Heinz mayonnaise.
          </p>
          <form className={styles.item_modifiers}>
            <strong>Choose your size</strong>
            <p>Select 1 option</p>

            <div className={styles.items_wraper}>
              <div className={styles.modifier}>
                <div>
                  <span>1 meat</span>
                  <p>33.00</p>
                </div>
                <RadioInput name="modifier_group" type="radio" value="1" />
              </div>
              <div className={styles.modifier}>
                <div>
                  <span>2 meats</span>
                  <p>35.00</p>
                </div>
                <RadioInput name="modifier_group" type="radio" value="2" />
              </div>
              <div className={styles.modifier}>
                <div>
                  <span>3 meats</span>
                  <p>35.00</p>
                </div>
                <RadioInput name="modifier_group" type="radio" value="3" />
              </div>
            </div>

            <footer>
              <section>
                <button type="button">
                  <img src={minusIcon} alt="Decrease Quantity" />
                </button>
                <span>1</span>
                <button type="button">
                  <img src={plusIcon} alt="Increase Quantity" />
                </button>
              </section>
              <button type="submit">
                Add to order
                <strong>.</strong>
                11.75
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}
