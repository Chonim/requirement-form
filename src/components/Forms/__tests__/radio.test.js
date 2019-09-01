import { shallowMount } from '@vue/test-utils'
import Radio from '@/components/Forms/Radio'

describe('Radio', () => {
  it('emit check radio', () => {
    const wrapper = shallowMount(Radio)
    const valueToCheck = '30분'
    wrapper.vm.handleClick(valueToCheck)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toBe(valueToCheck)
  })
})
