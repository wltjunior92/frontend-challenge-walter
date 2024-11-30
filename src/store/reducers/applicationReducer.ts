import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type OrderItem = {
  id?: number
  menuItemId: number
  name: string
  total: number
  quantity: number
  modifiers: {
    modifierId: number
    itemId: number
    itemName: string
    price: number
  }[]
}

type Chart = {
  items: OrderItem[]
  subtotal: number
  total: number
}

type ApplicationProps = {
  isLoading: boolean
  chart: Chart
}

const initialState: ApplicationProps = {
  isLoading: true,
  chart: {
    items: [],
    subtotal: 0,
    total: 0,
  },
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    addItemToOrderChart: (state, action: PayloadAction<OrderItem>) => {
      const orderItem = action.payload
      const items = [...state.chart.items, orderItem]
      state.chart = {
        items,
        subtotal: items.reduce((sum, item) => sum + item.total, 0),
        total: items.reduce((sum, item) => sum + item.total, 0),
      }
    },
  },
})

export const { setIsLoading, addItemToOrderChart } = applicationSlice.actions

export default applicationSlice.reducer
