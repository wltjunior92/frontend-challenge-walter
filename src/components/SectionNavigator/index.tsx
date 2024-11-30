import noImage from '../../assets/noImage.png'
import { useAppSelector } from '../../hooks/useAppSelector'
import { SectionItem } from './SectionItem'
import styles from './styles.module.css'

type SectionNavigatorProps = {
  selected: number
  onSelect: (id: number) => void
}

export function SectionNavigator({
  selected,
  onSelect,
}: SectionNavigatorProps) {
  const restaurantMenu = useAppSelector(state => state.menu)
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        {restaurantMenu.sections.map(section => (
          <SectionItem
            key={section.id}
            name={section.name}
            image={section.images.length > 0
              ? section.images[0].image
              : noImage}
            onSelect={() => onSelect(section.id)}
            selected={section.id === selected}
          />
        ))}
      </div>
    </nav>
  )
}
