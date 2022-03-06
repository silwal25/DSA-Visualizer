import styles from "../styles/pages/Home.module.scss"
import Link from "next/link"

import Header from "../components/Header/Header"
import Cards from "../components/Cards/Cards"

export default function Home() {
  const dataStr = [
    {
      title: "Stacks",
      text: "Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
      image: "",
      link: "/stacks"
    },
    {
      title: "Queues",
      text: "A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.",
      image: "",
      link: "/queues"
    },
    {
      title: "Linked Lists",
      text: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers",
      image: "",
      link: "/linked-list"
    }
  ]
  return (
    <div className={styles.home + " mt-5"}>
      <div className="container">
        <div className={styles.grid}>
          {dataStr.map((item) => (
            <Cards data={item} key={Math.random() * 100} />
          ))}
        </div>
      </div>
    </div>
  )
}
