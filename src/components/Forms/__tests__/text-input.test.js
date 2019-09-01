import { shallowMount } from '@vue/test-utils'
import TextInput from '@/components/Forms/TextInput'

describe('SelectBox', () => {
  it('emit typed input', () => {
    const wrapper = shallowMount(TextInput)
    const valueToCheck = '깨끗이 해주세요'
    wrapper.vm.handleInput(valueToCheck)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toBe(valueToCheck)
  })
})
