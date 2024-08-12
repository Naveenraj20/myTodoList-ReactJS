import style from "./footer.module.css";
export default function Footer({ count, totalCount }) {
  return (
    <div className={style.footer}>
      <span className={style.footText}>Completed todo: {count}</span>/
      <span className={style.footText}>Total todo: {totalCount}</span>
    </div>
  );
}
