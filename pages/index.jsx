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
      link: "/data-structures/stacks"
    },
    {
      title: "Queues",
      text: "A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.",
      image: "",
      link: "/data-structures/queues"
    },
    {
      title: "Linked Lists",
      text: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers",
      image: "",
      link: "/data-structures/linked-list"
    }
  ]

  const algo = [
    {
      title: "Bubble Sort",
      text: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
      image: "",
      link: "/algorithms/bubble-sort"
    },
    {
      title: "Selection Sort",
      text: "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.",
      image: "",
      link: "/algorithms/selection-sort"
    },
    {
      title: "insertion Sort",
      text: "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
      image: "",
      link: "/algorithms/insertion-sort"
    },
    {
      title: "Merge Sort",
      text: "Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
      image: "",
      link: "/algorithms/merge-sort"
    }
  ]
  return (
    <div className={styles.home + " mt-5"}>
      <div className="container">
        <section className={styles.dataStr}>
          <h2 className={styles.heading}>Data Structures</h2>
          <div className={styles.grid}>
            {dataStr.map((item) => (
              <Cards data={item} key={Math.random() * 100} />
            ))}
          </div>
        </section>
        <section className={styles.algos}>
          <h2 className={styles.heading}>Algorithms</h2>
          <div className={styles.grid}>
            {algo.map((item) => (
              <Cards data={item} key={Math.random() * 100} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
