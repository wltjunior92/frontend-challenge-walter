import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RestaurantData = {
  id: number
  name: string
  internalName: string
  description?: string | null
  liveFlag: number
  demoFlag: number
  address1: string
  address2?: string | null
  address3?: string | null
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: {
    id: number
    venueId: number
    bannerImage: string
    backgroundColour: string
    primaryColour: string
    primaryColourHover: string
    navBackgroundColour: string
  },
  ccy: string
  ccySymbol: string
  currency: string
}

const initialState: RestaurantData = {
  id: NaN,
  name: '',
  internalName: '',
  liveFlag: NaN,
  demoFlag: NaN,
  address1: '',
  city: '',
  county: '',
  postcode: '',
  country: '',
  timezoneOffset: '-03:00',
  locale: 'en-US',
  timeZone: 'America/Sao_Paulo',
  webSettings: {
    id: NaN,
    venueId: NaN,
    bannerImage: '',
    backgroundColour: '',
    primaryColour: '',
    primaryColourHover: '',
    navBackgroundColour: '',
  },
  ccy: 'USD',
  ccySymbol: '$',
  currency: 'U$',
}

const restaurantDataSlice = createSlice({
  name: 'restaurantData',
  initialState,
  reducers: {
    setRestaurantData: (_, action: PayloadAction<RestaurantData>) => {
      return action.payload
    },
  },
})

export const { setRestaurantData } = restaurantDataSlice.actions

export default restaurantDataSlice.reducer
