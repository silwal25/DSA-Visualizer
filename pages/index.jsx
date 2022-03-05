import styles from "../styles/pages/Home.module.scss"
import { CardGroup, Card } from "react-bootstrap"
import Link from "next/link"

import Header from "../components/Header/Header"

export default function Home() {
  return (
    <div className={styles.home + " mt-5"}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link href="/stacks">
              <a>
                <Card>
                  <Card.Body>
                    <Card.Title>Stacks</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/queues">
              <a>
                <Card>
                  <Card.Body>
                    <Card.Title>Queues</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/linked-list">
              <a>
                <Card>
                  <Card.Body>
                    <Card.Title>Linked Lists</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
