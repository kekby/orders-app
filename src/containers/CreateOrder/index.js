// @flow

import React from 'react';
import { useFormik } from 'formik';
import MaskedInput from 'components/MaskedInput';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import './styles.scss';

const options = [
  { label: 'New York', value: 'newyork' },
  { label: 'Moscow', value: 'moscow' },
];

type CreateOrderForm = {
  city: string,
  phone: string,
  name: string,
  date: string,
  time: string
}

const CreateOrder = () => {
  const formik = useFormik<CreateOrderForm>({
    initialValues: {
      city: '',
      phone: '',
      name: '',
      date: '',
      time: '',
    },

    onSubmit: console.log,
  });


  const { values } = formik;

  return (
    <div className="create-order">
      <h1 className="title mb-3">Онлайн запись</h1>
      <form className="form">
        <div className="form__row mb-2">
          <Select
            name="city"
            onChange={formik.handleChange}
            value={values.city}
            options={options}
            placeholder="Выберите город:"
          />
        </div>
        <div className="form__row mb-2">
          <div className="form__column mr-1">
            <Select
              name="date"
              onChange={formik.handleChange}
              value={values.date}
              options={options}
              placeholder="Дата:"
            />
          </div>
          <div className="form__column">
            <Select
              name="time"
              onChange={formik.handleChange}
              value={values.time}
              options={options}
              placeholder="Время:"
            />
          </div>
        </div>
        <div className="form__row mb-2">
          <MaskedInput
            mask="+7 (999) 999-99-99"
            placeholder="+7 (___) ___-__-__"
            name="phone"
            value={values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form__row mb-3">
          <Input
            name="name"
            value={values.name}
            onChange={formik.handleChange}
            placeholder="Ваше имя"
          />
        </div>
        <div className="form__row">
          <Button
            type="submit"
            className="centered"
            onClick={formik.handleSubmit}
          >
            Записаться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
