import styles from "../../styles/pages/BubbleSort.module.scss"

import { useEffect, useState, useRef } from "react"
import Bar from "../../components/Bar/Bar"

export default function BubbleSort() {
  const [data, setData] = useState([])
  const [size, setSize] = useState(100)
  const [delay, setDelay] = useState(10)
  const arraySize = useRef(null)
  const delayRef = useRef()

  const setArraySize = (e) => {
    e.preventDefault()
    setSize(arraySize.current.value)
  }

  const bubbleSort = async (e) => {
    e.preventDefault()
    var temp
    var arr = data
    var node1, node2
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        document.querySelector(`#${arr[j].index}`).classList.add("selected")
        document.querySelector(`#${arr[j + 1].index}`).classList.add("selected")
        if (arr[j].value > arr[j + 1].value) {
          temp = arr[j].value
          arr[j].value = arr[j + 1].value
          arr[j + 1].value = temp
        }
        await new Promise((r) => setTimeout(r, delay))
        setData(Array.from(arr))
        document.querySelector(`#${arr[j].index}`).classList.remove("selected")
        document.querySelector(`#${arr[j + 1].index}`).classList.remove("selected")
      }
    }
  }

  const setDelayTime = (e) => {
    e.preventDefault()
    setDelay(delayRef.current.value)
  }

  useEffect(() => {
    console.log(data)
    console.log(delay)
  }, [data])

  useEffect(() => {
    var temp = []
    for (var i = 0; i < size; i++) {
      temp.push({
        index: "item-" + i,
        value: Math.floor(Math.random() * (1000 - 10 + 1) + 10)
      })
    }
    setData(Array.from(temp))
  }, [size])
  return (
    <div className={styles.bubbleSort}>
      <div className="container">
        <h1>Bubble Sort</h1>
        <section>
          <form>
            <div className="form-group">
              <input type="text" ref={arraySize} placeholder="Enter array size" />
              <button onClick={setArraySize}>Submit</button>
              <button onClick={bubbleSort}>Sort</button>
            </div>
            <div className="form-group">
              <input type="text" ref={delayRef} placeholder="Enter delay in ms" />
              <button onClick={setDelayTime}>Submit</button>
            </div>
          </form>
        </section>
        <section className={styles.graph}>
          {data.map((item) => (
            <Bar key={item.index} data={item} />
          ))}
        </section>
      </div>
    </div>
  )
}
