import styles from "./Cards.module.scss"
import Link from "next/link"

export default function Cards({ data }) {
  return (
    <Link href={data.link}>
      <div className={styles.card}>
        <h4 className={styles.cardTitle}>{data.title}</h4>
        <p className={styles.text}>{data.text}</p>
      </div>
    </Link>
  )
}
