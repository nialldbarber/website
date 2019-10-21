import styled from 'styled-components'

export const Layout = styled.div`
  padding: 2rem;
  display: block;

  h1 {
    animation-name: slideInLeft;
    animation-duration: .3s;
    animation-fill-mode: both;
    animation-delay: .125s;
    animation-timing-function: cubic-bezier(.4, 0, 0, .88);
  }
`
