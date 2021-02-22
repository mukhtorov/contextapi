import React, { useState, useContext } from 'react'
import { Container, TitleImg, ToggleMode, Line, Desc, Item, Title, Img, ImgWrapper, IconCon, MobileContainer, Icon } from './AppStyle.js'
import img from './wbba.png'
import { ThemeContext } from './context'


const App = () => {
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)


  const dark = {
    icon: 'black',
    title: 'black',
    backgorund: 'white'
  }

  const light = {
    icon: 'white',
    title: 'white',
    backgorund: 'black'
  }

  const onChange = () => {
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
    <Container >
      <MobileContainer color={theme.backgorund}>
        <IconCon>
          <Icon.Arrow color={theme.icon} />
          <Icon.Switch color={theme.icon} />
        </IconCon>
        <ImgWrapper>
          <Img src={img} alt="wbba logo" />
          <TitleImg color={theme.title}>WebBrain Academy</TitleImg>
          <Desc color={theme.title} >IT School</Desc>
        </ImgWrapper>
        {/* dark */}
        <Item>
          <Icon.Dark color={theme.icon} />
          <Title color={theme.title}>Dark Mode</Title>
          <ToggleMode
            onChange={onChange}
            checked={mode}
            size={50}
          />
        </Item>
        {/* Grid */}
        <Item>
          <Icon.Grid />
          <Title color={theme.title}>Story</Title>
        </Item>
        {/* user */}
        <Item>
          <Icon.User />
          <Title color={theme.title}>Chat Head</Title>
        </Item>
        {/* user */}
        <Item>
          <Icon.Group />
          <Title color={theme.title}>Groups</Title>
        </Item>
        <Line />
        <Item>
          <Icon.Media />
          <Title color={theme.title}>Media and Photos</Title>
        </Item>
        <Item>
          <Icon.Settings />
          <Title color={theme.title}>Settings and Privcy</Title>
        </Item>
        <Item>
          <Icon.Comment />
          <Title color={theme.title}>Help Center</Title>
        </Item>
        <Item>
          <Icon.Notification />
          <Title color={theme.title}>Notification</Title>
        </Item>
      </MobileContainer>
    </Container>
  )
}
export default App
