import Header from "../Header/Header"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
