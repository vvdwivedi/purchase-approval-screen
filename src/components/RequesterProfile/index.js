import React from 'react';

function RequesterProfile(props) {
  const data = props.data || {};
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: 24 }}>
      <div>
        {data.profile_picture ? <img style={{ height: 24, width: 24 }} src={data.profile_picture} alt="" /> : ''}
      </div>
      <div style={{ flex: 1, marginLeft: 8}}>
        <p style={{ lineHeight: '24px' }}>{data.first_name} {data.last_name}</p>
      </div>
    </div>
  );
}

export default RequesterProfile;