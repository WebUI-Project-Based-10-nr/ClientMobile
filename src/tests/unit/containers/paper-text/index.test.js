import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { styles } from '~/containers/paper-text/PaperText.styles'
import { PaperText } from '~/containers'

describe('PaperText Component', () => {
  const checkStyle = (textElement, expectedStyles) => {
    const appliedStyles = textElement.props.style
    expect(appliedStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textAlign: 'left' }),
        expect.arrayContaining(expectedStyles)
      ])
    )
  }

  it('renders children correctly', () => {
    render(<PaperText>Test Text</PaperText>)
    expect(screen.getByText('Test Text')).toBeTruthy()
  })

  it('applies correct style for title variant', () => {
    render(<PaperText variant='title'>Title Text</PaperText>)
    const titleText = screen.getByText('Title Text')
    checkStyle(titleText, [expect.objectContaining({ color: '#46995d' })])
  })

  it('applies the correct style for descriptionText variant', () => {
    render(<PaperText variant='descriptionText'>Description Text</PaperText>)
    const descriptionText = screen.getByText('Description Text')
    checkStyle(descriptionText, [expect.objectContaining({ color: '#465a64' })])
  })

  it('applies the correct style for combineText variant', () => {
    render(<PaperText variant='combineText'>Combine Text</PaperText>)
    const combineText = screen.getByText('Combine Text')
    checkStyle(combineText, [expect.objectContaining({ color: '#46995d' })])
  })

  it('applies correct style for headlineSmall variant', () => {
    render(<PaperText variant='headlineSmall'>Small Headline</PaperText>)
    const smallHeadlineText = screen.getByText('Small Headline')
    checkStyle(smallHeadlineText, [expect.objectContaining({ fontSize: 20 })])
  })

  it('applies correct style for headlineMedium variant', () => {
    render(<PaperText variant='headlineMedium'>Medium Headline</PaperText>)
    const mediumHeadlineText = screen.getByText('Medium Headline')
    checkStyle(mediumHeadlineText, [
      expect.objectContaining({ color: '#333', fontSize: 24 })
    ])
  })

  it('applies correct style for titleSmall variant', () => {
    render(<PaperText variant='titleSmall'>Small Title</PaperText>)
    const smallTitleText = screen.getByText('Small Title')
    checkStyle(smallTitleText, [
      expect.objectContaining({ color: '#444', fontSize: 16 })
    ])
  })

  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn()
    render(<PaperText onPress={mockOnPress}>Press</PaperText>)
    fireEvent.press(screen.getByText('Press'))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })

  it('applies bold style when bold prop is true', () => {
    render(<PaperText bold>Bold</PaperText>)
    const boldText = screen.getByText('Bold')
    checkStyle(boldText, [expect.objectContaining({ fontWeight: 'bold' })])
  })

  it('does not apply bold style when bold prop is false', () => {
    render(<PaperText bold={false}>Normal</PaperText>)
    const normalText = screen.getByText('Normal')
    expect(normalText.props.style).not.toContainEqual(styles.wrapper)
  })

  it('defaults to no variant styles if an invalid variant is provided', () => {
    render(<PaperText variant='invalid'>Invalid Variant</PaperText>)
    expect(screen.getByText('Invalid Variant').props.style).toEqual(
      expect.arrayContaining([])
    )
  })

  it('renders with no variant styles when no variant is provided', () => {
    render(<PaperText>No Variant</PaperText>)
    expect(screen.getByText('No Variant').props.style).toEqual(
      expect.arrayContaining([])
    )
  })
})
