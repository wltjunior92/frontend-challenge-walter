import { useState } from 'react'

import searchIcon from '../../assets/searchIcon.svg'
import { Chart } from '../../components/Chart'
import { DetailsModal } from '../../components/DetailsModal'
import { SectionNavigator } from '../../components/SectionNavigator'
import {
  SectionAccordion,
} from '../../components/SectionNavigator/SectionAccordion'
import styles from './styles.module.css'

export function Home() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(true)

  const toggleOpenCloseDetailsModal = () => {
    setIsDetailsModalOpen(open => !open)
  }

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
              <SectionAccordion />
              <SectionAccordion />
              <SectionAccordion />
            </section>
          </main>
          <div className={styles.chart_content}>
            <Chart />
          </div>
        </div>
      </div>
      {isDetailsModalOpen &&
        <DetailsModal onClose={toggleOpenCloseDetailsModal} />}
    </div>
  )
}
