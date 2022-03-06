import styles from "../styles/pages/Queues.module.scss"
import { useState, useEffect, useRef } from "react"

export default function Queues() {
  const [data, setData] = useState(Array.from({ length: 20 }))
  const inputRef = useRef(null)
  const firstUpdate = useRef(true)
  const [front, setFront] = useState(-1)
  const [rear, setRear] = useState(-1)
  var i = 0

  const enqueue = (e) => {
    e.preventDefault()
    if (front == -1 && rear == -1) {
      setFront(0)
      setRear(0)
    } else if (front < data.length - 1) {
      setFront(front + 1)
    } else {
      alert("No more room left in the queue")
    }
  }

  const dequeue = (e) => {
    e.preventDefault()
    if (rear < front + 1) {
      setRear(rear + 1)
    } else {
      alert("No more element to dequeue")
    }
  }
  const clearQueue = (e) => {
    e.preventDefault()
    setFront(-1)
    setRear(-1)
  }

  useEffect(() => {
    console.log("front")
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    if (front == -1) {
      setData(Array.from({ length: 20 }))
      return
    }

    // Enqueue operation
    i = 0
    setData(
      data.map((item) => {
        if (i++ == front) {
          return inputRef.current.value
        } else {
          return item
        }
      })
    )
  }, [front])

  useEffect(() => {
    console.log("rear")
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (rear == -1) {
      setData(Array.from({ length: 20 }))
      return
    } else if (rear == 0) {
      return
    }
    i = 0
    setData(
      data.map((item) => {
        if (i++ == rear - 1) {
          return undefined
        } else {
          return item
        }
      })
    )
  }, [rear])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className={styles.queues}>
      <div className="container">
        <form className={styles.form}>
          <div className="form-group">
            <input type="text" id="input" ref={inputRef} placeholder="Enter value" />
            <button onClick={enqueue}>Enqueue</button>
            <button onClick={dequeue}>Dequeue</button>
            <button onClick={clearQueue}>clear queue</button>
          </div>
        </form>
        <div className={styles.info}>
          <div className={styles.frontNode}>
            <p>Front</p>
            <span className={styles.nodes}>
              <span className={styles.data}>{front >= 0 && data[front]}</span>
              <span className={styles.index}>{front}</span>
            </span>
          </div>
          <div className={styles.rearNode}>
            <p>Rear</p>
            <span className={styles.nodes}>
              <span className={styles.data}>{rear >= 0 && data[rear]}</span>
              <span className={styles.index}>{rear}</span>
            </span>
          </div>
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
