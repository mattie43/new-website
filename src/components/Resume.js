import resume from "../files/Matt_Ericksen.pdf";

export default function Resume(props) {
  return (
    <div className={`page3${props.pageHidden ? "" : " page-hidden"}`}>
      testing page3 Open a PDF file <a href={resume}> example</a>.
    </div>
  );
}
