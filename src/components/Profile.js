import React, { useState } from 'react'
import { connect } from 'react-redux'

import InputPopUp from './InputPopUp'
import { editProfile, EDIT_PROFILE } from '../actions'

const Profile = ({ dispatchSaveProfile, profile }) => {
  const [isEditProfile, setIsEditProfile] = useState(false)

  return (
    <div
      style={{
        backgroundColor: '#42d1f5',
        padding: '5px',
        borderStyle: 'solid',
        margin: '2px',
        borderWidth: '2px',
      }}
    >
      <div style={{ textAlign: 'center', fontSize: '40px' }}>My Blog</div>
      <img src={profile.imageUrl} alt="" />
      <div>{profile.description}</div>
      <input
        className="button"
        type="button"
        value="Edit"
        onClick={() => setIsEditProfile(true)}
      />
      <InputPopUp
        title="Edit Profile"
        visible={isEditProfile}
        closeModal={() => setIsEditProfile(false)}
        inputs={[
          { title: 'Image', suggestedText: 'Enter image url', currentText: '' },
          {
            title: 'Description',
            suggestedText: 'Enter Description',
            currentText: '',
          },
        ]}
        onSubmit={dispatchSaveProfile}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchSaveProfile: (imageUrl, description) => dispatch(editProfile(imageUrl, description)),
})

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
