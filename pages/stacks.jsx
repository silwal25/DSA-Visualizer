import styles from "../styles/pages/Stacks.module.scss"
import { useState, useEffect, useRef } from "react"
import next from "next"

export default function Stacks() {
  const [data, setData] = useState(Array.from({ length: 20 }))
  const inputRef = useRef(null)
  const [top, setTop] = useState(-1)
  const [temp, setTemp] = useState(-1)
  var i = 0
  const stackPush = (e) => {
    e.preventDefault()
    // Checking for overflow
    if (top < data.length - 1) {
      setTop(top + 1)
    } else {
      alert("Stack overflow")
    }
  }
  const stackPop = (e) => {
    e.preventDefault()

    // Checking for underflow
    if (top >= 0) {
      setTop(top - 1)
    } else {
      alert("Stack underflow")
    }
  }
  const stackClear = (e) => {
    e.preventDefault()
    setTop(-1)
  }
  console.log(data)
  useEffect(() => {
    console.log(top)
    i = 0

    // For clear stack operation
    if (top == -1) {
      setData(Array.from({ length: 20 }))
      setTemp(-1)
      return
    }

    if (top > temp) {
      // if top is more than the temp
      // then the push operation is performed
      setTemp(temp + 1)
      setData(
        data.map((item) => {
          if (i++ == top) {
            return inputRef.current.value
          } else {
            return item
          }
        })
      )
    } else if (top < temp) {
      // if top is less than the temp
      // Then the pop operation is performed
      setData(
        data.map((item) => {
          if (i++ == temp) {
            return undefined
          } else {
            return item
          }
        })
      )
      setTemp(temp - 1)
    }
    i = 0
  }, [top])

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className={styles.stacks}>
      <div className="container">
        <form className={styles.form}>
          <input type="text" id="input" ref={inputRef} placeholder="Enter value" />
          <button onClick={stackPush}>Push</button>
          <button onClick={stackPop}>pop</button>
          <button onClick={stackClear}>clear stack</button>
        </form>
        <p>Top</p>
        <div
          className={styles.topElement}
          style={{ display: "block", width: "fit-content", marginBottom: "3rem" }}
        >
          <span className={styles.nodes}>
            <span className={styles.data}>{top > -1 && <>{data[top]}</>}</span>
            <span className={styles.index}>{top}</span>
          </span>
        </div>
        <div className={styles.elements}>
          {data.map((item) => (
            <span className={styles.nodes} key={i++}>
              <span className={styles.data}>{item}</span>
              <span className={styles.index}>{i}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
