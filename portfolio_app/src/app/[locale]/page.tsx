import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@/i18n/navigation";
import Navbar from "../components/navbar/navbar";

export default async function Home() {
  return (
    <div className={styles.page}>
      HOME PAGE
    </div>
  );
}
