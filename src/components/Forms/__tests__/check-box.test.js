import { shallowMount } from '@vue/test-utils'
import CheckBox from '@/components/Forms/CheckBox'

describe('CheckBox', () => {
  const wrapper = shallowMount(CheckBox)

  it('push check option into checkedOptions array', () => {
    wrapper.vm.handleClick('진공청소기로 청소')
    expect(wrapper.vm.checkedOptions.length).toBe(1)
  })
  it('has to emit checked value', () => {
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual(['진공청소기로 청소'])
  })
  it('has to recieve selected value as props', () => {
    expect(wrapper.vm.savedOutput).toEqual(['진공청소기로 청소'])
  })
  it('has to remove checked element if it\'s checked again ', () => {
    wrapper.vm.handleClick('진공청소기로 청소')
    expect(wrapper.vm.savedOutput.length).toBe(0)
  })
})
