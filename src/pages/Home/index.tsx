import { useEffect, useState } from 'react'

import searchIcon from '../../assets/searchIcon.svg'
import { Chart } from '../../components/Chart'
import { ChartModal } from '../../components/ChartModal'
import { DetailsModal } from '../../components/DetailsModal'
import { SectionNavigator } from '../../components/SectionNavigator'
import {
  SectionAccordion,
} from '../../components/SectionNavigator/SectionAccordion'
import styles from './styles.module.css'

export function Home() {
  const chartQty = 1
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isChartModalOpen, setIsChartModalOpen] = useState(true)

  const toggleOpenCloseDetailsModal = () => {
    setIsDetailsModalOpen(open => !open)
  }
  const toggleOpenCloseChartModal = () => {
    setIsChartModalOpen(open => !open)
  }

  useEffect(() => {
    if (isDetailsModalOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isDetailsModalOpen])

  return (
    <div>
      <div className={styles.banner}>
        <img
          src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.search_input}>
          <img src={searchIcon} />
          <input placeholder="Search menu items" type="text" />
        </div>
        <div className={styles.cards}>
          <main>
            <SectionNavigator />
            <section>
              <SectionAccordion onSelectItem={toggleOpenCloseDetailsModal} />
              <SectionAccordion onSelectItem={toggleOpenCloseDetailsModal} />
              <SectionAccordion onSelectItem={toggleOpenCloseDetailsModal} />
            </section>
          </main>
          <div className={styles.chart_content}>
            <Chart />
          </div>
        </div>
      </div>
      {
        isDetailsModalOpen &&
          <DetailsModal onClose={toggleOpenCloseDetailsModal} />
      }
      {
        isChartModalOpen &&
          <ChartModal onClose={toggleOpenCloseChartModal} />
      }
      {
        chartQty > 0 &&
          <div className={styles.chart_button_container}>
            <button type="button" onClick={toggleOpenCloseChartModal}>
              Your basket
              <strong>.</strong>
              1 item
            </button>
          </div>
      }
    </div>
  )
}
