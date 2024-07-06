import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({styleButton, styleTextButton, textButton, size, disabled, ...rests}) => {
  return (
    <Button
    style={{...styleButton, background: disabled ? '#ccc': styleButton.background}}
        size={size}
        {...rests}
      >
        <span style={ styleTextButton } >{textButton}</span>
      </Button>
  )
}

export default ButtonComponent