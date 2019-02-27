import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';

import { createColumn } from '../../../../store/actions/columns';

import { useClickOutside, useKeyDownOnly } from '../../../../hooks/events';

import {
  Wrapper,
  Placeholder,
  NewColumnForm,
  TitleInput,
  StyledIcon,
  Button,
} from './styles';

function NewColumn({ create }) {
  const wrapper = useRef(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');

  useClickOutside(wrapper, () => reset(), editing);
  useKeyDownOnly(['Escape', 'Esc'], () => reset(), editing);

  const handleSubmit = e => {
    e.preventDefault();
    create(title);
    setTitle('');
  };

  const reset = () => {
    setTitle('');
    setEditing(false);
  };

  return (
    <Wrapper ref={wrapper}>
      <PoseGroup flipMove={false}>
        {editing ? (
          <NewColumnForm key="form" onSubmit={handleSubmit}>
            <TitleInput
              type="text"
              value={title}
              placeholder="Title"
              onChange={e => setTitle(e.target.value)}
              autoFocus
            />
            <Button variant="success" type="submit">
              Save
            </Button>
            <Button variant="cancel" type="button" onClick={reset}>
              Cancel
            </Button>
          </NewColumnForm>
        ) : (
          <Placeholder key="placeholder" onClick={() => setEditing(true)}>
            <StyledIcon icon="plus" />
          </Placeholder>
        )}
      </PoseGroup>
    </Wrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  create: title => dispatch(createColumn(title)),
});

export default connect(
  null,
  mapDispatchToProps
)(NewColumn);
