import styles from './botaoprincipal.module.css'

import React from 'react'

const BotaoPrincipal = ({ children, tamanho }) => {
  return (
    <button
      className={`
      ${styles.botao}
      ${styles[tamanho]}
      `}
    >
      {children}
    </button>
  )
}

export default BotaoPrincipal