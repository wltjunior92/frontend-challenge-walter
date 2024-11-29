import xIcon from '../../assets/xIcon.svg'
import { Chart } from '../Chart'
import styles from './styles.module.css'

type ChartModalProps = {
  onClose: () => void
}

export function ChartModal({ onClose }: ChartModalProps) {
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          <img src={xIcon} alt="Close modal" />
        </button>
        <Chart />
      </div>
    </div>
  )
}
