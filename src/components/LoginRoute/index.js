import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  BgContainer,
  WidthContainer,
  Img,
  Form,
  InputContainer,
  Label,
  Input,
  Checkbox,
  CheckBoxLabel,
  LoginButton,
  CheckBoxContainer,
  ErrorMessage,
  UserDetails,
} from './styledComponents'

const darkLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isCheckboxActive: false,
    errorMsg: '',
  }

  onChangeUserName = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isCheckboxActive: !prevState.isCheckboxActive,
    }))
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFalure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async e => {
    e.preventDefault()
    let {username, password} = this.state
    if (username === 'prashanth') {
      username = 'rahul'
    }
    if (password === 'prash@2023') {
      password = 'rahul@2021'
    }

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucces(data.jwt_token)
    } else {
      this.onSubmitFalure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, isCheckboxActive} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <BgContainer data-dark={isDarkTheme}>
                <WidthContainer data-dark={isDarkTheme}>
                  <Img
                    src={isDarkTheme ? darkLogoUrl : lightLogoUrl}
                    alt="website logo"
                  />
                  <Form onSubmit={this.onSubmitForm}>
                    <InputContainer>
                      <Label htmlFor="userName" data-dark={isDarkTheme}>
                        USERNAME
                      </Label>
                      <Input
                        type="text"
                        id="userName"
                        placeholder="Username"
                        data-dark={isDarkTheme}
                        value={username}
                        onChange={this.onChangeUserName}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="passWord" data-dark={isDarkTheme}>
                        PASSWORD
                      </Label>
                      <Input
                        type={isCheckboxActive ? 'text' : 'password'}
                        id="passWord"
                        placeholder="Pssword"
                        data-dark={isDarkTheme}
                        value={password}
                        onChange={this.onChangePassword}
                      />
                    </InputContainer>
                    <CheckBoxContainer>
                      <Checkbox
                        type="checkbox"
                        id="checkbox"
                        onClick={this.onClickCheckbox}
                      />
                      <CheckBoxLabel htmlFor="checkbox" data-dark={isDarkTheme}>
                        Show Password
                      </CheckBoxLabel>
                    </CheckBoxContainer>
                    <LoginButton type="submit">Login</LoginButton>
                  </Form>
                  {errorMsg !== '' ? (
                    <ErrorMessage>*{errorMsg}</ErrorMessage>
                  ) : null}
                </WidthContainer>
                <UserDetails>
                  use these user details :-
                  <br />
                  username:- prashanth
                  <br />
                  password:- prash@2023
                </UserDetails>
              </BgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default LoginRoute
