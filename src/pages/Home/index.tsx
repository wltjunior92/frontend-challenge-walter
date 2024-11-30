import { useEffect, useState } from 'react'

import searchIcon from '../../assets/searchIcon.svg'
import { Chart } from '../../components/Chart'
import { ChartModal } from '../../components/ChartModal'
import { DetailsModal } from '../../components/DetailsModal'
import { SectionNavigator } from '../../components/SectionNavigator'
import {
  SectionAccordion,
} from '../../components/SectionNavigator/SectionAccordion'
import { useAppSelector } from '../../hooks/useAppSelector'
import { MenuItem } from '../../store/reducers/menuReducer'
import styles from './styles.module.css'

export function Home() {
  const chart = useAppSelector(state => state.application.chart)
  const restaurantData = useAppSelector(state => state.restaurantData)
  const restaurantMenu = useAppSelector(state => state.menu)

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isChartModalOpen, setIsChartModalOpen] = useState(true)
  const [selectedSection, setSelectedSection] = useState(NaN)

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const toggleOpenCloseDetailsModal = () => {
    setIsDetailsModalOpen(open => !open)
  }
  const toggleOpenCloseChartModal = () => {
    setIsChartModalOpen(open => !open)
  }

  function handleSelectSections(id: number) {
    setSelectedSection(id)
  }

  function handleSelectItem(item: MenuItem) {
    setSelectedItem(item)
    setIsDetailsModalOpen(true)
  }

  useEffect(() => {
    if (isDetailsModalOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isDetailsModalOpen])

  useEffect(() => {
    if (restaurantMenu.sections.length === 0) return
    setSelectedSection(restaurantMenu.sections[0].id)
  }, [restaurantMenu])

  return (
    <div>
      <div className={styles.banner}>
        <img
          src={restaurantData.webSettings.bannerImage}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.search_input}>
          <img src={searchIcon} />
          <input placeholder="Search menu items" type="text" />
        </div>
        <div className={styles.cards}>
          <main>
            <SectionNavigator
              selected={selectedSection}
              onSelect={id => handleSelectSections(id)}
            />
            <section>
              {
                restaurantMenu.sections.map(section => (
                  <SectionAccordion
                    key={section.id}
                    onSelectItem={handleSelectItem}
                    section={section}
                    isSelected={selectedSection === section.id}
                  />
                ))
              }
            </section>
          </main>
          <div className={styles.chart_content}>
            <Chart />
          </div>
        </div>
      </div>
      {
        isDetailsModalOpen &&
          <DetailsModal
            onClose={toggleOpenCloseDetailsModal}
            selectedItem={selectedItem}
          />
      }
      {
        isChartModalOpen &&
          <ChartModal onClose={toggleOpenCloseChartModal} />
      }
      {
        chart.items.length > 0 &&
          <div className={styles.chart_button_container}>
            <button type="button" onClick={toggleOpenCloseChartModal}>
              Seu carrinho
              <strong>.</strong>
              {chart.items.length} item
            </button>
          </div>
      }
    </div>
  )
}
