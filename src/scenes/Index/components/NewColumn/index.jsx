import React, { useState } from 'react';

import { createColumn } from '../../../../store/column';

import { Placeholder, NewColumnForm } from './styles';

export default function NewColumn() {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <NewColumnForm />
  ) : (
    <Placeholder onClick={() => createColumn({ title: 'new' })} />
  );
}
