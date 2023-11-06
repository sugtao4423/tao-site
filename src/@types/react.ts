import React from 'react'

export type PropsWithClassName = { className?: string }
export type PropsWithChildren = React.PropsWithChildren
export type PropsWithClassChildren = PropsWithClassName & PropsWithChildren

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
