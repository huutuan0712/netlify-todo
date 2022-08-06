import React, { useState } from 'react';
import classNames from 'classnames';
import useTodo from '../todo.hook';
import { Status } from 'constants';

export default function TodoItem(props) {
  const { todo } = props;
  const { updateStatusTodo } = useTodo();
  const [editing, setEditing] = useState({
    isEditing: false,
    name: todo.name,
  });
  const handleSubmit = () => {
    if (editing.name === '') {
      setEditing({ ...editing, isEditing: false });
      return;
    }
    updateStatusTodo(todo.id, { name: editing.name }, () => {
      setEditing({ ...editing, isEditing: false });
    });
  };
  return (
    <div className="flex mb-4 items-center  gap-1">
      {!editing.isEditing && (
        <>
          <p
            className={classNames(
              { 'line-through': todo.status === Status.DELETED.value },
              { 'text-green-500': todo.status === Status.COMPLETED.value },
              'w-full text-grey-darkest'
            )}
          >
            {todo.name}
          </p>
          {todo.status !== Status.COMPLETED.value && (
            <>
              {' '}
              <div className="flex items-center gap-1">
                {/* COMPLETED AND EDIT */}
                <button
                  disabled={todo.status === Status.COMPLETED.value}
                  onClick={() =>
                    updateStatusTodo(todo.id, {
                      status: Status.COMPLETED.value,
                    })
                  }
                  type="button"
                  className=" btn btn-xs"
                >
                  {todo.status === Status.COMPLETED.value ? '✓' : 'Done'}
                </button>

                {/* UNDO AND DELETED */}
                <button
                  onClick={() =>
                    updateStatusTodo(todo.id, {
                      status:
                        todo.status === Status.DELETED.value
                          ? Status.ACTIVE.value
                          : Status.DELETED.value,
                    })
                  }
                  type="button"
                  className="btn btn-xs"
                >
                  {todo.status === Status.DELETED.value ? 'Undo' : 'Deleted'}
                </button>
              </div>
              <button
                onClick={() => setEditing({ ...editing, isEditing: true })}
                className="btn btn-xs"
              >
                Edit
              </button>
            </>
          )}
        </>
      )}
      {editing.isEditing && (
        <div className="flex items-center flex-1 gap-1">
          <input
            onChange={(e) => {
              e.preventDefault();
              setEditing({ ...editing, name: e.target.value });
            }}
            className="input input-bordered flex-1"
            value={editing.name}
          />
          <button className="btn btn-xs" onClick={handleSubmit}>
            Save
          </button>
          <button
            onClick={() =>
              setEditing({ ...editing, isEditing: !editing.isEditing })
            }
          >
            {editing.isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      )}
    </div>
  );
}
