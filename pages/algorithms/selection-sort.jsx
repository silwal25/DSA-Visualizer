import styles from "../../styles/pages/SelectionSort.module.scss"

import { useState, useRef, useEffect } from "react"

import Bar from "../../components/Bar/Bar"

export default function SelectionSort() {
  const [data, setData] = useState([])
  const [size, setSize] = useState(50)
  const [delay, setDelay] = useState(10)
  const arraySize = useRef(null)
  const delayRef = useRef()

  const setArraySize = (e) => {
    e.preventDefault()
    setSize(arraySize.current.value)
  }

  const bubbleSort = async (e) => {
    e.preventDefault()
    let temp
    let arr = data
    let min
    let i, j
    for (i = 0; i < arr.length - 1; i++) {
      min = i
      document.querySelector(`#${arr[min].index}`).classList.add("selected")
      for (j = i + 1; j < arr.length; j++) {
        document.querySelector(`#${arr[j].index}`).classList.add("selected")
        await new Promise((r) => setTimeout(r, delay))
        if (arr[j].value < arr[min].value) {
          document.querySelector(`#${arr[min].index}`).classList.remove("selected")
          min = j
          document.querySelector(`#${arr[min].index}`).classList.add("selected")
        }
        if (j != min) {
          document.querySelector(`#${arr[j].index}`).classList.remove("selected")
        }
      }
      temp = arr[i].value
      arr[i].value = arr[min].value
      arr[min].value = temp
      await new Promise((r) => setTimeout(r, delay))
      setData(Array.from(arr))
      document.querySelector(`#${arr[min].index}`).classList.remove("selected")
      // document.querySelector(`#${arr[j].index}`).classList.remove("selected")
    }
    console.log(arr)
  }

  const setDelayTime = (e) => {
    e.preventDefault()
    setDelay(delayRef.current.value)
  }

  useEffect(() => {
    console.log(data)
    console.log(delay)
  }, [delay])

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
    <div className={styles.selectionSort}>
      <div className="container">
        <h1>Selection Sort</h1>
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
