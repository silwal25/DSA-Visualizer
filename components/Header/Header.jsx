import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <h2 className={styles.heading + " heading-primary"}>Lalit DSA Visualization</h2>
      </div>
    </div>
  )
}
