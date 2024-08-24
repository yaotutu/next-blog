import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
    </div>
  );
}
