import React from 'react'
import { render, screen, userEvent } from '@testing-library/react-native'
import { router } from 'expo-router'
import { ButtonsGeneral } from '~/components'

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn()
  }
}))

describe('ButtonsGeneral', () => {
  beforeEach(() => {
    render(<ButtonsGeneral />)
  })

  it('should render Get Started button and Log in text', () => {
    expect(screen.getByText('Get Started')).toBeTruthy()
    expect(screen.getByText('Log in')).toBeTruthy()
  })

  it('should render the button icon', () => {
    expect(screen.getByTestId('button-icon')).toBeTruthy()
  })

  it('should navigate to signup when Get Started button is pressed', async () => {
    const getStartedButton = screen.getByText('Get Started')
    await userEvent.press(getStartedButton)

    expect(router.replace).toHaveBeenCalledWith('public/signup')
  })

  it('should navigate to login when Log in text is pressed', async () => {
    const loginText = screen.getByText('Log in')
    await userEvent.press(loginText)

    expect(router.replace).toHaveBeenCalledWith('public/login')
  })
})
