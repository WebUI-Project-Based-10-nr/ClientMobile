//should implement fade animations correctly (FadeIn, FadeOut)
//should implement slide animations correctly (SlideInRight, SlideOutLeft)
//should implement SlideInRight animation with delay
//import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react-native'
import { FadeIn, FadeOut } from 'react-native-reanimated'
import iconInfo from '~/assets/sign-up/icon-info.png'
import { AnimatedCard } from '~/components'

const mockData = {
  title: 'Test title',
  description: 'Some description',
  image: iconInfo
}

const getDefaultStyle = () => ({
  opacity: 0
})

describe('AnimatedCard component', () => {
  beforeEach(() => {
    render(<AnimatedCard data={mockData} />)
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
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
    jest.useFakeTimers()
    const imageView = screen.getByTestId('image-view')
    expect(imageView).toBeTruthy()

    jest.advanceTimersByTime(300)

    expect(FadeIn).toHaveBeenCalled()
  })

  //   test('withTiming animation', () => {
  //     const style = getDefaultStyle();

  //     const { getByTestId } = render(<AnimatedComponent />);
  //     const view = getByTestId('view');
  //     const button = getByTestId('button');

  //     expect(view.props.style.width).toBe(0);
  //     expect(view).toHaveAnimatedStyle(style);

  //     fireEvent.press(button);
  //     jest.advanceTimersByTime(600);

  //     style.width = 100;
  //     expect(view).toHaveAnimatedStyle(style);
  //   });
})
