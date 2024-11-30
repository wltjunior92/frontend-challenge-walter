import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

import minusIcon from '../../assets/minusIcon.svg'
import noImage from '../../assets/noImage.png'
import plusIcon from '../../assets/plusIcon.svg'
import xIcon from '../../assets/xIcon.svg'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  addItemToOrderChart,
  OrderItem,
} from '../../store/reducers/applicationReducer'
import { MenuItem, Modifier } from '../../store/reducers/menuReducer'
import { formatCurrency } from '../../utils/formatCurrency'
import { generateRandomId } from '../../utils/generateRandomId'
import { RadioInput } from '../RadioInput'
import styles from './styles.module.css'

type DetailsModalProps = {
  onClose: () => void
  selectedItem: MenuItem | null
}

export function DetailsModal({ onClose, selectedItem }: DetailsModalProps) {
  const restaurantData = useAppSelector(state => state.restaurantData)
  const dispatch = useAppDispatch()

  const [orderItem, setOrderItem] = useState<OrderItem>({
    menuItemId: selectedItem?.id ?? NaN,
    name: selectedItem?.name ?? '',
    subtotal: 0,
    total: selectedItem?.price ?? 0,
    quantity: 1,
    modifiers: [],
  })

  function handleSelectModifier(modifier: Modifier, itemId: number) {
    let modifiers: OrderItem['modifiers'] = []
    const [item] = modifier.items.filter(item => item.id === itemId)

    const foundOrderItemModifier = orderItem.modifiers
      .find(mod => mod.modifierId === modifier.id)

    if (!foundOrderItemModifier) {
      modifiers = [{
        modifierId: modifier.id,
        itemId: item.id,
        itemName: item.name,
        price: item.price,
      }]
    } else if (modifier.maxChoices === 1) {
      modifiers = [{
        ...foundOrderItemModifier,
        itemId: item.id,
        itemName: item.name,
        price: item.price,
      }]
    }

    // implements multiple modifiers selection when it's allowed

    const copyOrderItem: OrderItem = {
      ...orderItem,
      modifiers,
    }

    setOrderItem(copyOrderItem)
  }

  function handleIncreaseQuantity() {
    const copyOrderItem: OrderItem = {
      ...orderItem,
      quantity: orderItem.quantity + 1,
    }
    setOrderItem(copyOrderItem)
  }

  function handleDecreaseQuantity() {
    const copyOrderItem: OrderItem = {
      ...orderItem,
      quantity: orderItem.quantity - 1,
    }
    setOrderItem(copyOrderItem)
  }

  function getOrderItemTotalAndSubtotal() {
    let price = 0
    if (selectedItem?.price) {
      price = selectedItem.price
    }
    if (orderItem.modifiers.length > 0) {
      price = orderItem.modifiers.reduce((sum, modifier) => {
        return sum + modifier.price
      }, price)
    }
    return {
      total: price * orderItem.quantity,
      subtotal: price,
    }
  }

  function validateRequiredModifiers() {
    if (!selectedItem) return true
    const requiredModifierIds =
      selectedItem.modifiers?.filter(modifier => modifier.minChoices > 0)
        .map(modifier => modifier.id)

    if (!requiredModifierIds) return true

    const orderModifierIds = orderItem.modifiers
      .map(modifier => modifier.modifierId)

    return requiredModifierIds.every(id => orderModifierIds.includes(id))
  }

  function handleAddToOrder() {
    const { total, subtotal } = getOrderItemTotalAndSubtotal()

    const isValid = validateRequiredModifiers()

    if (!isValid) return

    const newOrderItem: OrderItem = {
      ...orderItem,
      id: generateRandomId(),
      total,
      subtotal,
    }
    dispatch(addItemToOrderChart(newOrderItem))
    onClose()
  }

  if (!selectedItem) return <></>

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          <img src={xIcon} alt="Close modal" />
        </button>
        <img
          src={(selectedItem && selectedItem.images) &&
            selectedItem.images.length > 0
            ? selectedItem.images[0].image
            : noImage}
        />
        <div className={styles.content}>
          <h3>{selectedItem.name}</h3>
          <p>
            {selectedItem.description}
          </p>
          <div className={styles.item_modifiers}>
            {
              selectedItem.modifiers &&
              selectedItem.modifiers.map(modifier => (
                <Fragment key={modifier.id}>
                  <strong>{modifier.name}</strong>
                  <p>
                    Selecione {
                    modifier.maxChoices > 1
                      ? `
                        entre ${modifier.minChoices}
                         e ${modifier.maxChoices} opções
                        `
                      : `${modifier.minChoices} opção`
                    }
                  </p>

                  <div className={styles.items_wraper}>
                    {modifier.items.map(item => (
                      <div key={item.id} className={styles.modifier}>
                        <div>
                          <span>{item.name}</span>
                          <p>
                            {
                              formatCurrency(
                                restaurantData.locale,
                                restaurantData.ccy,
                              ).format(item.price)
                            }
                          </p>
                        </div>
                        <RadioInput
                          name="modifier_group"
                          type="radio"
                          onChange={() =>
                            handleSelectModifier(modifier, item.id)}
                        />
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))
            }

            <footer>
              <section>
                <button
                  type="button"
                  onClick={handleDecreaseQuantity}
                  disabled={orderItem.quantity === 1}
                >
                  <img src={minusIcon} alt="Decrease Quantity" />
                </button>
                <span>{orderItem.quantity}</span>
                <button type="button" onClick={handleIncreaseQuantity}>
                  <img src={plusIcon} alt="Increase Quantity" />
                </button>
              </section>
              <button
                onClick={handleAddToOrder}
                type="button"
                disabled={!validateRequiredModifiers()}
              >
                Adicionar ao pedido
                <strong>.</strong>
                {
                  formatCurrency(
                    restaurantData.locale,
                    restaurantData.ccy,
                  ).format(getOrderItemTotalAndSubtotal().total)
                }
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
