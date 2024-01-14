import styled from "styled-components";

const all = {
    colors:{
        color1: 'var(--Color-2, #F8F7F9)',
        color2: '#FFF' 
    },
    common:`
    display:flex;
    justify-content:space-between;
    align-items:center;
    `
}

export const HeaderWrraper = styled.div`
${all.common}
background-color: black;
padding: 20px 0px 5px 0px ;
`
export const Logo = styled.img``

export const HeaderContainer = styled.div`
${all.common}
gap: 3vw;
`

export const HeaderUl = styled.ul`
${all.common}
gap: 2vw;
transition: all 2s;
`

export const HeaderLink = styled.li`
color:${all.colors.color1} ;
font-family: 'Poppins', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const HeaderWebs = styled.div`
${all.common}
gap: 1vw;
`