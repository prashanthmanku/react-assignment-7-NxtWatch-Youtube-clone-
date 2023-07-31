import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props['data-dark'] ? '#212121' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WidthContainer = styled.div`
  background-color: ${props => (props['data-dark'] ? '#0f0f0f' : ' #ffffff')};

  width: 90%;
  max-width: 400px;
  padding: 40px 20px;
  @media screen and (min-width: 500px) {
    padding: 50px 30px;
  }
  border-radius: 5px;

  //   box-shadow: 0px 4px 16px 0px #ebebeb;
  box-shadow: ${props =>
    props['data-dark'] ? null : '0px 4px 16px 0px #ebebeb'};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Img = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 20px;
`

export const Form = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`

export const Label = styled.label`
  color: ${props => (props['data-dark'] ? '#e2e8f0' : '#64748b')};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${props => (props['data-dark'] ? '#475569' : '#cbd5e1')};
  outline: none;
  color: ${props => (props['data-dark'] ? '#cbd5e1' : '#0f0f0f')};
  font-weight: 500;
  font-size: 15px;
  background-color: transparent;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`

export const CheckBoxLabel = styled.label`
  margin: 0px 0px 0px 4px;
  font-weight: 500;
  font-size: 14px;
  color: ${props => (props['data-dark'] ? '#e2e8f0' : '#181818')};
  cursor: pointer;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`

export const ErrorMessage = styled.p`
  margin: 3px 0px 0px 0px;
  color: #ff0000;
  font-size: 12px;
  font-weight: 400;
`

export const UserDetails = styled.p`
  line-height: 23px;
  font-size: 14px;
`
export const Span = styled.h1`
  color: red;
`
