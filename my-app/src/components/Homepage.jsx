import ImageSlider ,{Slide} from "react-auto-image-slider"

const Homepage=()=>{
return(
<ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img id="im1" alt="img" src="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" />
      </Slide>
      <Slide>
        <img id="im1" alt="img" src="https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" />
      </Slide>
      <Slide>
        <img id="im1" alt="img" src="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" />
      </Slide>
    </ImageSlider>
)
}
export default Homepage;