import React, { useState } from 'react'
import Modal from 'react-modal'

const InputPopUp = ({
  title, visible, closeModal, inputs, onSubmit,
}) => {
  // .title, .suggestedText, .currentText
  const [texts, setTexts] = useState(inputs)

  const changeInput = (withTitle, newInput) => {
    setTexts(
      texts.map(item => {
        if (item.title === withTitle) {
          return { ...item, currentText: newInput }
        }
        return item
      }),
    )
  }

  return (
    <Modal
      isOpen={visible}
      ariaHideApp={false}
      style={{
        overlay: {
          top: '23%',
          bottom: '23%',
          left: '38%',
          right: '38%',
        },
        content: {
          backgroundColor: '#96d6e3',
        },
      }}
    >
      <div style={{ fontFamily: 'cursive' }}>
        <div style={{ fontSize: '20px' }}>{title}</div>
        {texts.map(item => {
          const { suggestedText, currentText } = item
          return (
            <div key={item.title}>
              <div style={{ margin: '3px' }}>{title}</div>
              <input
                className="text"
                type="text"
                placeholder={suggestedText}
                value={currentText}
                onChange={event => changeInput(title, event.target.value)}
                style={{ margin: '3px' }}
              />
            </div>
          )
        })}
        <div>
          <input
            className="button"
            type="button"
            value="Save"
            onClick={() => {
              onSubmit(...texts.map(item => item.currentText))
              closeModal()
            }}
            style={{ margin: '3px' }}
          />
          <input
            className="button"
            type="button"
            value="Cancel"
            onClick={() => closeModal()}
            style={{ margin: '3px' }}
          />
        </div>
      </div>
    </Modal>
  )
}

export default InputPopUp
