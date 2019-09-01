import { shallowMount } from '@vue/test-utils'
import { FORM_TYPES } from '@/config/constants'
import Main from '@/components/Main'

describe('validate', () => {
  const createWrapper = (data) => {
    const options = {
      data () {
        return {
          ...data
        }
      }
    }
    return shallowMount(Main, options)
  }

  it('has to return undefined if output is null', () => {
    const data = {
      output: null
    }
    const wrapper = createWrapper(data)
    expect(wrapper.vm.validate()).toBe(undefined)
  })

  const data = {
    output: {
      id: 1,
      items: [{
        id: 1,
        answer: []
      }, {
        id: 2,
        answer: ''
      }, {
        id: 3,
        answer: ''
      }, {
        id: 4,
        answer: ''
      }]
    }
  }
  const wrapper = createWrapper(data)

  it('has to return true if output is correct', () => {
    let stepIndex = 0
    const setAnswer = (stepIndex, value) => {
      wrapper.vm.output.items[stepIndex].answer = value
    }
    const getAnswer = stepIndex => wrapper.vm.output.items[stepIndex].answer
    const changeStep = (step) => {
      wrapper.vm.onStepChange(step)
      stepIndex += step
    }

    // step 1
    expect(wrapper.vm.selectedInputItem.formType).toBe(FORM_TYPES.CHECKBOX)
    expect(wrapper.vm.stepIndex).toBe(stepIndex)
    expect(wrapper.vm.validate()).toBe(undefined)

    setAnswer(stepIndex, '진공청소기로 청소')
    expect(wrapper.vm.validate()).toBe(true)

    // move to next step
    changeStep(1)

    // step 2
    expect(wrapper.vm.selectedInputItem.formType).toBe(FORM_TYPES.RADIO)
    expect(wrapper.vm.stepIndex).toBe(stepIndex)
    expect(wrapper.vm.validate()).toBe(undefined)

    setAnswer(stepIndex, '2시간')
    expect(wrapper.vm.validate()).toBe(true)

    // move to previous step and check value
    changeStep(-1)
    expect(getAnswer(stepIndex)).toBe('진공청소기로 청소')
    expect(wrapper.vm.validate()).toBe(true)
    changeStep(1)

    // move to next step
    changeStep(1)

    // step 3
    expect(wrapper.vm.selectedInputItem.formType).toBe(FORM_TYPES.TEXT_INPUT)
    expect(wrapper.vm.stepIndex).toBe(stepIndex)
    expect(wrapper.vm.validate()).toBe(undefined)

    setAnswer(stepIndex, '깨끗이 해주세요')
    expect(wrapper.vm.validate()).toBe(true)

    // move to next step
    wrapper.vm.onStepChange(1)
    stepIndex += 1

    // step 4
    expect(wrapper.vm.selectedInputItem.formType).toBe(FORM_TYPES.SELECT_BOX)
    expect(wrapper.vm.stepIndex).toBe(stepIndex)
    expect(wrapper.vm.validate()).toBe(undefined)

    setAnswer(stepIndex, '세번째 셀렉트박스 답변 입니다')
    expect(getAnswer(stepIndex)).toBe('세번째 셀렉트박스 답변 입니다')
    expect(wrapper.vm.validate()).toBe(true)
  })

  it('every answer has to be string', () => {
    expect(wrapper.vm.onSubmitClick().items.every(item => typeof item.answer === 'string')).toBe(true)
  })

  it('answer length has to be 4', () => {
    expect(wrapper.vm.onSubmitClick().items.length).toBe(4)
  })
})
