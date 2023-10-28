'use client'

import { useState } from 'react'

import classNames from 'classnames'

import { DrawerData } from '@/common/interfaces/drawer'
import { BarIcon } from '@/components/icons/BarIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { DrawerItems } from '@/components/molecules/Drawer/DrawerItems'

import styles from './drawer.module.scss'

type Props = {
  data: DrawerData[]
  menuBorder?: boolean
}

export const Drawer: React.FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const onOpen = (): void => setOpen(true)
  const onClose = (): void => setOpen(false)

  return (
    <div>
      <BarIcon
        className={classNames(styles.menu, {
          [styles.menuBorder]: props.menuBorder,
        })}
        onClick={onOpen}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      {open && <div className={classNames(styles.mask)} onClick={onClose} />}
      <div
        className={classNames(styles.drawer, {
          [styles.open]: open,
        })}
      >
        <div className={styles.closeWrapper}>
          <CloseIcon className={styles.close} onClick={onClose} />
        </div>
        <DrawerItems
          className={styles.items}
          data={props.data}
          onClose={onClose}
        />
      </div>
    </div>
  )
}
