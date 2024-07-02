import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({styleButton, styleTextButton, textButton, size, ...rests}) => {
  return (
    <Button
        size={size}
        style={styleButton}
        {...rests}
      >
        <span style={ styleTextButton } >{textButton}</span>
      </Button>
  )
}

export default ButtonComponent