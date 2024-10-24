import { render, screen, userEvent } from '@testing-library/react-native'
import { Linking } from 'react-native'
import { Url } from '~/components'

describe('Url component', () => {
  const mockUrl = 'https://example.com'

  beforeEach(() => {
    render(<Url url={mockUrl}>{mockUrl}</Url>)
    jest.spyOn(Linking, 'openURL').mockImplementation(jest.fn())
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render Url component with the correct link', () => {
    const url = screen.getByText(mockUrl)

    expect(url).toBeTruthy()
  })

  it('should call Linking.openURL function when pressed', async () => {
    const url = screen.getByText(mockUrl)
    await userEvent.press(url)

    expect(Linking.openURL).toHaveBeenCalled()
  })
})
