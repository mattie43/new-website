export default function Home(props) {
  return (
    <div className={`page1${props.pageHidden ? "" : " page-hidden"}`}>
      testing page1
    </div>
  );
}
