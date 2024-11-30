import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
  getRestaurantInitialData,
  getRestaurantMenuData,
} from '../../services/restaurantService'
import { setIsLoading } from '../../store/reducers/applicationReducer'
import { RestaurantData } from '../../store/reducers/restaurantReducer'

export function AppLayout() {
  const dispatch = useAppDispatch()
  async function loadInitialRestaurantData() {
    const restaurantData: RestaurantData = await getRestaurantInitialData()
    await getRestaurantMenuData()

    const root = document.documentElement
    root.style.setProperty(
      '--branding-500',
      restaurantData.webSettings.primaryColour,
    )
    root.style.setProperty(
      '--branding-500-hover',
      restaurantData.webSettings.primaryColourHover,
    )
    root.style.setProperty(
      '--nav-background-color',
      restaurantData.webSettings.navBackgroundColour,
    )
    root.style.setProperty(
      '--background',
      restaurantData.webSettings.backgroundColour,
    )
    document.title = restaurantData.name
  }

  useEffect(() => {
    dispatch(setIsLoading(true))
    loadInitialRestaurantData()
      .finally(() => dispatch(setIsLoading(false)))
  }, [dispatch])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
