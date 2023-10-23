import {useRef} from "react"
import { useState } from 'react'

export const Input = () => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const WidthRef = useRef<HTMLInputElement>(null);
  const HeightRef = useRef<HTMLInputElement>(null);



  return (
    <>
      <form>
        <label htmlFor="number">Šířka</label>
        <input ref={WidthRef} defaultValue={width}/>
        <label htmlFor="number">Výška</label>
        <input ref={HeightRef} defaultValue={height} />
      </form>
    </>
  );
}

export default Input;