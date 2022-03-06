import styles from "./Header.module.scss"
import Link from "next/link"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <Link href="/">
          <a>
            <h2 className={styles.heading}>Lalit DSA Visualization</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}
