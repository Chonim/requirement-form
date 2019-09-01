import { shallowMount } from '@vue/test-utils'
import { items } from '@/assets/input.json'
import FormWrapper from '@/components/FormWrapper'

describe('handleChange', () => {
  const createWrapper = (itemId) => shallowMount(FormWrapper, {
    propsData: {
      formId: 1,
      selectedInputItem: items.find(item => item.itemId === itemId)
    }
  })

  const wrapper = createWrapper(1)
  it('has to show null as output initially', () => {
    expect(wrapper.vm.output).toBe(null)
  })
  it('create output once value is changed', () => {
    wrapper.vm.handleChange('진공청소기로 청소')
    const output = {
      'id': 1,
      'items': [{
        'answer': '진공청소기로 청소',
        'id': 1
      }]
    }
    expect(wrapper.vm.output).toEqual(output)
  })
  it('has to change value if selected value already exists', () => {
    wrapper.vm.handleChange('쓰레기 비우기')
    expect(wrapper.vm.output.items[0].answer).toEqual('쓰레기 비우기')
  })
})
