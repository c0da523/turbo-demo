import styles from "./page.module.css";
import { Button, Switch } from "@customtickets/ui";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Button>Click me!</Button>
          <Button variant={"secondary"}>Click me!</Button>
          <Switch />
        </div>
      </div>
    </main>
  );
}
