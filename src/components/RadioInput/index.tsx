import { InputHTMLAttributes } from 'react'

import styles from './styles.module.css'

type RadioInputProps = InputHTMLAttributes<HTMLInputElement>

export function RadioInput({ ...rest }: RadioInputProps) {
  return (
    <label className={styles.radio_container}>
      <input {...rest} />
      <span className={styles.custom_radio} />
    </label>
  )
}
