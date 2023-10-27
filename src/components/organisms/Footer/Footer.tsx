import styles from './footer.module.scss'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>taoのサイト</span>
      <span>&copy;</span>
      <span>{`${year}.`}</span>
    </footer>
  )
}
