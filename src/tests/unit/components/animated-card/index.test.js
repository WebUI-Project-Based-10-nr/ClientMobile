import { render, screen } from '@testing-library/react-native'
import { FadeIn } from 'react-native-reanimated'
import iconInfo from '~/assets/sign-up/icon-info.png'
import { AnimatedCard } from '~/components'

const mockData = {
  title: 'Test title',
  description: 'Some description',
  image: iconInfo
}

describe('AnimatedCard component', () => {
  beforeEach(() => {
    render(<AnimatedCard data={mockData} />)
    jest.useFakeTimers()
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('AnimatedCard should render correctly', () => {
    const title = screen.getByText(mockData.title)
    const description = screen.getByText(mockData.description)

    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
  })

  it('should render image correctly', () => {
    const image = screen.getByTestId('test-image')
    expect(image).toBeTruthy()
    expect(image).toBeDefined()
    expect(image.props.source).toBe(mockData.image)
  })

  it('should implement FadeIn animation correctly', () => {
    const imageView = screen.getByTestId('image-view')
    expect(imageView).toBeTruthy()

    jest.advanceTimersByTime(300)

    expect(FadeIn).toHaveBeenCalled()
  })
})
