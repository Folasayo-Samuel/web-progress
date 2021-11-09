import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarouselComponent from '../carousel/Carousel';


const InsureSlide = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="pt-4 pb-4">
          <span className="Ins">Insured</span> Flash deals
        </h2>
      </div>
      <BootstrapCarouselComponent></BootstrapCarouselComponent>
    </div>
  );
};
export default InsureSlide;
