require('react-native-reanimated').setUpTests()

jest.mock('react-native-reanimated', () => {
  const ActualReanimated = jest.requireActual('react-native-reanimated/mock')
  const { View } = jest.requireActual('react-native')

  const MockedView = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  )

  return {
    ...ActualReanimated,
    default: {
      ...ActualReanimated.default,
      View: MockedView
    }
  }
})
