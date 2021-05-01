import styled from '@emotion/styled'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

export const Wrapper = styled.div`
  width: 300px;
`

export const Title = styled(Typography)`
  flex-grow: 1;
  margin-left: 16px;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`
