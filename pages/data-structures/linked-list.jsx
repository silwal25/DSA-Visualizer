import styles from "../../styles/pages/LinkedList.module.scss"

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

    removeAt(index) {
      if (index >= this.length || index < 0) {
        alert("Index value out of bounds")
        return
      }
      if (index == 0) {
        this.head = this.head.next
        setHead(this.head.data)
        return
      }
      var node = this.head
      var itr = 0
      while (itr++ < index - 1) {
        node = node.next
      }
      node.next = node.next.next
      this.length--
    }

    insertAt(index, data) {
      if (index >= this.length || index < 0) {
        alert("Index value out of bounds")
        return
      }
      var newNode = new Node(data)
      if (index == 0) {
        newNode.next = this.head
        this.head = newNode
        return
      }
      var current = this.head
      var itr = 0
      while (itr++ < index - 1) {
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
      this.length++
    }

    listSize() {
      return this.length
    }
    print() {
      var current = this.head
      var elements = []
      var i = 0
      while (current) {
        elements.push({ index: i++, data: current.data })
        current = current.next
      }
      return elements
    }
  }
  const l1 = useRef(new LinkedList())
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)

  const addElement = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) {
      alert("Please enter a value to insert in the list")
      return
    }
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

  const deleteAt = (e) => {
    e.preventDefault()
    if (!inputRef2.current.value) {
      alert("Please enter a value to remove from the list")
      return
    }
    l1.current.removeAt(inputRef2.current.value)
    setData(l1.current.print())
  }

  const insertAt = (e) => {
    e.preventDefault()
    if (!inputRef3.current.value) {
      alert("Please enter a node index to insert at")
      return
    }
    if (!inputRef4.current.value) {
      alert("Please enter a value for the node")
      return
    }
    l1.current.insertAt(inputRef3.current.value, inputRef4.current.value)
    setData(l1.current.print())
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className={styles.linkedList}>
      <div className="container">
        <form className={styles.form}>
          <div className="form-group">
            <input type="text" id="input" ref={inputRef} placeholder="Enter value" />
            <button onClick={addElement} className="btn">
              Add node
            </button>
            <button onClick={deleteLast}>Delete node</button>
            <button onClick={clearList}>clear list</button>
          </div>
          <div className="form-group">
            <input type="text" id="input2" ref={inputRef2} placeholder="Enter node index" />
            <button onClick={deleteAt}>Delete node at this index</button>
          </div>
          <div className="form-group">
            <input type="text" id="input3" ref={inputRef3} placeholder="Enter node index" />
            <input type="text" id="input4" ref={inputRef4} placeholder="Enter value" />
            <button onClick={insertAt}>Insert node at this index</button>
          </div>
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
                <span className={styles.data}>{item.data}</span>
                <span className={styles.index}>{item.index}</span>
              </div>
              <img src="/right-arrow.svg" />
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
