import React from 'react'
interface Props {
  pageKey: string
  [name: string]: any
}
function Intercept({ components, pageKey }: Props) {
  return components
}

export default Intercept
