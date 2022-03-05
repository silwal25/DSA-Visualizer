import styles from "../styles/pages/LinkedList.module.scss"

import { useState, useEffect, useRef } from "react"
import next from "next"

export default function LinkedList() {
  const [data, setData] = useState([])
  const [head, setHead] = useState(0)

  class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }

  class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
    add(data) {
      if (this.length == 0) {
        setHead(data)
      }
      var node = new Node(data)
      var current = this.head
      if (this.head == null) {
        this.head = node
      } else {
        while (current.next) {
          current = current.next
        }
        current.next = node
      }
      this.length++
    }

    removeLast() {
      if (this.length == 0) {
        alert("List is empty")
        return
      }
      var current = this.head
      var prev
      if (this.length == 1) {
        this.head = null
        this.length = 0
        setHead(0)
      } else {
        while (current.next) {
          prev = current
          current = current.next
        }
        prev.next = null
        this.length--
      }
    }

    listSize() {
      return this.length
    }
    print() {
      var current = this.head
      var elements = []
      while (current) {
        elements.push(current.data)
        current = current.next
      }
      return elements
    }
  }
  const l1 = useRef(new LinkedList())
  const inputRef = useRef(null)

  const addElement = (e) => {
    e.preventDefault()
    l1.current.add(inputRef.current.value)
    setData(l1.current.print())
  }

  const deleteLast = (e) => {
    e.preventDefault()
    l1.current.removeLast()
    setData(l1.current.print())
  }

  const clearList = (e) => {
    e.preventDefault()
    l1.current.head = null
    setHead(0)
    setData(l1.current.print())
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className={styles.linkedList}>
      <div className="container">
        <form className={styles.form}>
          <input type="text" id="input" ref={inputRef} placeholder="Enter value" />
          <button onClick={addElement}>Add node</button>
          <button onClick={deleteLast}>Delete node</button>
          <button onClick={clearList}>clear list</button>
        </form>
        <div className={styles.info}>
          <div className={styles.frontNode}>
            <p>Head</p>
            <span className={styles.nodes}>
              <span className={styles.data}>{head}</span>
              <span className={styles.index}></span>
            </span>
          </div>
        </div>
        <div className={styles.elements}>
          {data.map((item) => (
            <span className={styles.nodes} key={Math.random() * 100}>
              <div>
                <span className={styles.data}>{item}</span>
                <img src="/right-arrow.svg" />
              </div>
              <span className={styles.index}></span>
            </span>
          ))}
          <span className={styles.nodes}>
            <div>
              <span className={styles.data}>null</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
