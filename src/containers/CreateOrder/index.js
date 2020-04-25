// @flow

import React from 'react';
import { useFormik } from 'formik';
import Input from 'components/Input';

type CreateOrderForm = {
  city: string
}

const CreateOrder = () => {
  const formik = useFormik<CreateOrderForm>({
    initialValues: {
      city: '',
    },

    onSubmit: console.log,
  });

  const { values } = formik;
  return (
    <div className="create-order">
      <h1 className="title">Онлайн запись</h1>
      <form>
        <Input name="city" onChange={formik.handleChange} value={values.city} />
      </form>
    </div>
  );
};

export default CreateOrder;
