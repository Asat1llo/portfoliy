import { NavLink as Link } from 'react-router-dom'
import {Container, Section, Img } from '../../Container.js'
import { HeaderWrraper, Logo, HeaderContainer, HeaderUl, HeaderLink , HeaderWebs } from './header.js'

import web1 from '../../assets/svg/instagram.svg'
import web2 from '../../assets/svg/github.svg'
import web3 from '../../assets/svg/linkedin.svg'

function Header(){
    return(
      <Section>
        <Container>
         <HeaderWrraper>
            <Logo src='/'/>
            <HeaderContainer>
               <HeaderUl>
                <HeaderLink>Home</HeaderLink>
                <HeaderLink>Projects</HeaderLink>
                <HeaderLink>About</HeaderLink>
                <HeaderLink>Contacts</HeaderLink>
               </HeaderUl>
              <HeaderWebs>
                <Link src='https://www.instagram.com/asadulloh_iminjonov?igsh=dnc5a2oyM2p1MDE4'> <Img src={web1}/> </Link>
                <Link src='https://github.com/Asat1llo'> <Img src={web2}/> </Link>
                <Link src='https://www.linkedin.com/in/asadulloh-iminjonov-b55549294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <Img src={web3}/> </Link>
              </HeaderWebs>
            </HeaderContainer>
         </HeaderWrraper>
        </Container>
      </Section>
    )
}

export default Header