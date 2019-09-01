import { shallowMount } from '@vue/test-utils'
import SelectBox from '@/components/Forms/SelectBox'

describe('SelectBox', () => {
  it('emit selected option', () => {
    const wrapper = shallowMount(SelectBox)
    const valueToCheck = '두번째 셀렉트박스 답변 입니다'
    wrapper.vm.handleSelect(valueToCheck)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toBe(valueToCheck)
  })
})
