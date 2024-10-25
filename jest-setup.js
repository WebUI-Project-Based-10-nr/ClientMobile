require('react-native-reanimated').setUpTests()
import 'react-native-reanimated/mock'

jest.mock('react-native-reanimated', () => {
  const ActualReanimated = jest.requireActual('react-native-reanimated/mock')

  return {
    ...ActualReanimated,
    FadeIn: jest.fn().mockImplementation(() => ({
      duration: 300,
      start: jest.fn()
    })),
    FadeOut: jest.fn().mockImplementation(() => ({
      duration: 300,
      start: jest.fn()
    }))
  }
})
