import styled from '@emotion/styled'

type H1Types = {
    color?: string,
}

export const TypographyH1 = styled.h1<H1Types>`
  text-align: center;
  color: ${(props) => props.color}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
  
  button {
    width: 40px;
    height: 24px;
    cursor: pointer;
    font-size: 18px;
  }
`
