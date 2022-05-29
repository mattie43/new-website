export default function Home(props) {
  return (
    <div className={`page1${props.pageHidden ? "" : " page-hidden"}`}>
      <div className="inner-page">
        Hey, my name is Matt Ericksen. I'm a Full Stack (Mostly Front-End) Web
        Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        ultrices malesuada magna quis facilisis. Curabitur malesuada rhoncus
        dapibus. Curabitur egestas bibendum nunc eu molestie. Etiam ac lacus
        magna. Morbi nec imperdiet arcu, at eleifend dolor. Vivamus eu rutrum
        sapien. Duis tortor nibh, elementum et risus at, laoreet vestibulum
        magna. Nulla eu leo nisi. Mauris dictum, augue vel eleifend posuere,
        metus dui vehicula nulla, eget rhoncus ipsum diam non metus. Aenean
        varius libero eu neque molestie, a eleifend lacus ultricies. Cras vitae
        congue lorem. Sed consequat risus purus, et feugiat turpis faucibus ut.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </div>
    </div>
  );
}
