import { Container, Section, Img } from '../../Container.js'
import { MainWrraper, MainVideo } from './main.js'

import video from '../../assets/video/Hello.gif'

function Main (){
    return(
      <Section>
        <Container>
            <MainWrraper>
              <MainVideo> <video src={video} autoPlay loop muted/></MainVideo>
            </MainWrraper>
        </Container>
      </Section>
    )
}

export default Main