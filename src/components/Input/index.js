import React from 'react'
import { InputContainer } from './styles'
import Button from '../Button'

export default function Input({value, onChange, placeholder, onClik}) {
  return (
    <InputContainer> 
      <input 
        value={value} onChange={onChange} placeholder={placeholder}>
       </input>
        <Button onClick={onClik} name={">>"}> </Button>
    </InputContainer>
  )
}
