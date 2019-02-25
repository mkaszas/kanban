import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { createColumn } from '../../../../store/actions/columns';

import { Placeholder, NewColumnForm, TitleInput } from './styles';

function NewColumn({ create }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    create(title);
    setTitle('');
    setEditing(false);
  };

  return editing ? (
    <NewColumnForm onSubmit={handleSubmit}>
      <TitleInput
        type="text"
        value={title}
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        autoFocus
      />
    </NewColumnForm>
  ) : (
    <Placeholder onClick={() => setEditing(true)} />
  );
}

const mapDispatchToProps = dispatch => ({
  create: title => dispatch(createColumn(title)),
});

export default connect(
  null,
  mapDispatchToProps
)(NewColumn);
