import { AxiosError } from 'axios'

import { api } from '../lib/axios'
import store from '../store'
import { Menu, setRestaurantMenu } from '../store/reducers/menuReducer'
import { setRestaurantData } from '../store/reducers/restaurantReducer'

export async function getRestaurantInitialData() {
  try {
    const dispatch = store.dispatch

    const { data } = await api.get('/restaurant-details')

    dispatch(setRestaurantData(data))
    return data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.message)
  }
}

export async function getRestaurantMenuData() {
  try {
    const dispatch = store.dispatch

    const { data } = await api.get('/menu-details')

    const menu: Menu = {
      id: data.id,
      name: data.name,
      type: data.type,
      collapse: data.collapse,
      sections: data.sections,
    }

    console.log('data', data.sections)
    console.log('menu', menu.sections)

    dispatch(setRestaurantMenu(menu))
  } catch (error) {
    const err = error as AxiosError
    console.error(err.message)
  }
}
