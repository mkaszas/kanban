import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';

import { createColumn } from '../../../../store/actions/columns';

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

  useEffect(() => {
    if (editing) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClick);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [editing]);

  const handleKeyDown = ({ key }) => {
    if (key === 'Escape') {
      reset();
    }
  };

  const handleClick = e => {
    if (wrapper.current && e.target) {
      if (!wrapper.current.contains(e.target)) {
        reset();
      }
    }
  };

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
