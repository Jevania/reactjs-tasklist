import "./Background.css";

const Background = () => {
  return (
    <>
      <div class="background-image">
        <img src="assets/img/img-target.png" class="layer target-animation" alt="particle" />
        <img src="assets/img/img-cartoon.png" class="layer cartoon-animation" alt="particle" />
        <img src="assets/img/img-text.png" class="layer text-animation" alt="particle" />
      </div>
    </>
  );
};

export default Background;
