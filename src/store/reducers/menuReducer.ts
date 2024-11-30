import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Modifier = {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: {
    id: number
    name: string
    price: number
    maxChoices: number
    position: number
    visible: number
    availabilityType: string
    available: boolean
  }[]
}

export type MenuItem = {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible: number
  availabilityType: string
  sku: string
  modifiers?: Modifier[]
  images: {
    id: number,
    image: string
  }[]
  available: boolean
}

export type Section = {
  id: number
  name: string
  description?: string
  postition: number
  visible: number
  images: {
    id: number
    image: string
  }[]
  items: MenuItem[]
}

export type Menu = {
  id: number
  name: string
  type: string
  collapse: number
  sections: Section[]
}

const initialState: Menu = {
  id: NaN,
  name: '',
  type: '',
  collapse: 0,
  sections: [],
}

const menuSlice = createSlice({
  name: 'restaurantMenu',
  initialState,
  reducers: {
    setRestaurantMenu: (_, action: PayloadAction<Menu>) => {
      return action.payload
    },
  },
})

export const { setRestaurantMenu } = menuSlice.actions

export default menuSlice.reducer
