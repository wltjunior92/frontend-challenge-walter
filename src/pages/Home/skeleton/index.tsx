import '../../../global.css'

import searchIcon from '../../../assets/searchIcon.svg'
import { Chart } from '../../../components/Chart'
import {
  SectionNavigatorSkeleton,
} from '../../../components/SectionNavigator/skeleton'
import styles from './styles.module.css'

export function HomeSkeleton() {
  return (
    <div>
      <div className={`${styles.banner} skeleton`} />
      <div className={styles.wrapper}>
        <div className={styles.search_input}>
          <img src={searchIcon} />
          <input
            placeholder="Search menu items"
            type="text"
          />
        </div>
        <div className={styles.cards}>
          <main>
            <SectionNavigatorSkeleton />
            <section>
              <div className={`${styles.accordion_skeleton} skeleton`} />
              <div className={`${styles.accordion_skeleton} skeleton`} />
              <div className={`${styles.accordion_skeleton} skeleton`} />
            </section>
          </main>
          <div className={styles.chart_content}>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}
