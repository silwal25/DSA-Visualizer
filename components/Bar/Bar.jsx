import styles from "./Bar.module.scss"

export default function Bar({ data }) {
  return (
    <div className={styles.bar} style={{ height: `${data.value * 0.6}px` }} id={data.index}></div>
  )
}
