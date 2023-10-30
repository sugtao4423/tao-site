import React from 'react'

export const Nl2br: React.FC<{ text: string }> = (props) => {
  const regex = /(\n)/g
  return (
    <>
      {props.text
        .split(regex)
        .map((line, key) =>
          line.match(regex) ? React.createElement('br', { key }) : line
        )}
    </>
  )
}
