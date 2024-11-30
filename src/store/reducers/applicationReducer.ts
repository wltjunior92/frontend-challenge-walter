import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type OrderItem = {
  id?: number
  menuItemId: number
  name: string
  subtotal: number
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
      console.log(state.chart)
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const orderItemId = action.payload
      const itemIndex = state.chart.items
        .findIndex(item => item.id === orderItemId)

      const quantity = state.chart.items[itemIndex].quantity + 1
      const total = state.chart.items[itemIndex].subtotal * quantity

      state.chart.items[itemIndex] = {
        ...state.chart.items[itemIndex],
        quantity,
        total,
      }
      state.chart.subtotal = state.chart.items
        .reduce((sum, item) => sum + item.total, 0)
      state.chart.total = state.chart.items
        .reduce((sum, item) => sum + item.total, 0)
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const orderItemId = action.payload
      const itemIndex = state.chart.items
        .findIndex(item => item.id === orderItemId)

      const quantity = state.chart.items[itemIndex].quantity - 1

      if (quantity === 0) {
        state.chart.items = state.chart.items
          .filter(item => item.id !== orderItemId)
      } else {
        const total = state.chart.items[itemIndex].subtotal * quantity

        state.chart.items[itemIndex] = {
          ...state.chart.items[itemIndex],
          quantity,
          total,
        }
      }

      state.chart.subtotal = state.chart.items
        .reduce((sum, item) => sum + item.total, 0)
      state.chart.total = state.chart.items
        .reduce((sum, item) => sum + item.total, 0)
    },
  },
})

export const {
  setIsLoading,
  addItemToOrderChart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = applicationSlice.actions

export default applicationSlice.reducer
