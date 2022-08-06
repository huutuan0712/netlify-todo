import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import useTodo from '../todo.hook';
import { Status } from 'constants';

export default function AddTodo() {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        name: '',
        status: Status.ACTIVE.value,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is Required'),
      })}
      onSubmit={(values, actions) =>
        addTodo(values).then(() => actions.resetForm())
      }
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        values,
      }) => (
        <Form onSubmit={handleSubmit} className="mb-2">
          <div className="flex items-center justify-around">
            <div>
              <input
                value={values.name}
                id="name"
                onChange={handleChange}
                name="name"
                as="input"
                className="input input-bordered input-md"
                placeholder="Add Todo"
              />
            </div>

            <select
              className="select select-bordered"
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {Object.values(Status).map((status, index) => (
                <option
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  value={status.value}
                  label={status.label}
                />
              ))}
            </select>
            <button className="btn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>

          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </Form>
      )}
    </Formik>
  );
}
