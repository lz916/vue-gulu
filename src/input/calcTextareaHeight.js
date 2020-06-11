const CONTEXT_STYLE = [
    'letter-spaceing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
]

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`

let hiddenTextarea
const calculateNodeStyling = (element) => {
    const style = window.getComputedStyle(element)
    const boxSizing = style.getPropertyValue('box-sizing')
    const paddingSizing = parseFloat(style.getPropertyValue('padding-top')) +
        parseFloat(style.getPropertyValue('padding-bottom'))
    const borderSizing = parseFloat(style.getPropertyValue('border-top-width')) +
        parseFloat(style.getPropertyValue('border-bottom-width'))
    const contextStyle = CONTEXT_STYLE.map(item => {
        return `${item}: ${style.getPropertyValue(item)}`
    })

    return { boxSizing, paddingSizing, borderSizing, contextStyle }
}

const calcTextareaHeight = (element, minRow = 1, maxRow = null) => {
    console.log(element.value)
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    let {
        boxSizing,
        paddingSizing,
        borderSizing,
        contextStyle
    } = calculateNodeStyling(element)
    hiddenTextarea.setAttribute('style', `${contextStyle}; ${HIDDEN_STYLE}`)
    hiddenTextarea.value = element.value || element.placeholder || ''
    let height = hiddenTextarea.scrollHeight
    let result = {}
    if (boxSizing === 'border-box') {
        height = height + borderSizing
    } else {
        height = height - paddingSizing
    }
    hiddenTextarea.value = ''
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSizing
    console.log(singleRowHeight)
    if (minRow) {
        let minHeight = singleRowHeight * minRow
        if (borderSizing === 'box-sizing') {
            minHeight = minHeight + borderSizing + paddingSizing
        }
        height = Math.max(minHeight, height)
        result.minHeight = `${minHeight}px`
    }
    if (maxRow) {
        let maxHeight = singleRowHeight * maxRow
        if (borderSizing === 'box-sizing') {
            maxHeight = maxHeight + borderSizing + paddingSizing
        }
        height = Math.min(maxHeight, height)
    }
    result.height = `${height}px`
    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea)
    hiddenTextarea = null
    return result
}

export default calcTextareaHeight