import { render, screen } from '@testing-library/react-native'
import {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft
} from 'react-native-reanimated'
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
    jest.clearAllMocks()
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

  it('should contain FadeIn as "entering" prop for Image', () => {
    const imageView = screen.getByTestId('image-view')

    expect(imageView).toBeTruthy()
    expect(imageView.props.entering).toBe(FadeIn)
  })

  it('should contain FadeOut as "entering" prop for Image', () => {
    const imageView = screen.getByTestId('image-view')

    expect(imageView).toBeTruthy()
    expect(imageView.props.entering).toBe(FadeIn)
  })

  it('should contain FadeOut as "exiting" prop for Image', () => {
    const imageView = screen.getByTestId('image-view')

    expect(imageView).toBeTruthy()
    expect(imageView.props.exiting).toBe(FadeOut)
  })

  it('should contain SlideInRight as "entering" prop for Animated.Text', () => {
    const title = screen.getByText(mockData.title)
    const description = screen.getByText(mockData.description)

    expect(title.props.entering).toBe(SlideInRight)
    expect(description.props.entering).toBe(SlideInRight)
  })

  it('should contain SlideOutLeft as "exiting" prop for Animated.Text', () => {
    const title = screen.getByText(mockData.title)
    const description = screen.getByText(mockData.description)

    expect(title.props.exiting).toBe(SlideOutLeft)
    expect(description.props.exiting).toBe(SlideOutLeft)
  })
})
