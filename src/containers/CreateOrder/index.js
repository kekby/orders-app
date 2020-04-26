// @flow

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import type { Order } from 'types';
import { createOrder } from 'store/orders/actions';
import { getCities, getTimeSlots } from 'store/app/actions';
import { citiesOptionsSelector, citySelector, daysSelector } from 'store/app/selectors';
import { getCitiesStatusSelector, getTimeSlotsStatusSelector } from 'store/status/selectors';
import MaskedInput from 'components/MaskedInput';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import Brand from 'components/Brand';
import Muted from 'components/Muted';
import './styles.scss';

const CreateOrder = () => {
  const dispatch = useDispatch();
  const getCitiesStatus = useSelector(getCitiesStatusSelector);
  const getTimeSlotsStatus = useSelector(getTimeSlotsStatusSelector);

  const isLoading = getCitiesStatus === 'REQUEST' || getTimeSlotsStatus === 'REQUEST';

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const formik = useFormik<Order>({
    initialValues: {
      city: '',
      phone: '',
      name: '',
      date: '',
      time: '',
    },

    onSubmit: (values) => dispatch(createOrder({
      ...values,
      phone: values.phone.replace(/\D/g, ''),
    })),
  });

  const { values } = formik;
  const cities = useSelector(citiesOptionsSelector);
  const city = useSelector(citySelector);
  const days = useSelector(daysSelector);

  useEffect(() => {
    if (values.city) {
      dispatch(getTimeSlots(values.city));
    }
  }, [values.city]);

  useEffect(() => {
    if (city) {
      formik.setFieldValue('city', city);
    }
  }, [city]);

  return (
    <>
      <Brand isLoading={isLoading} className="mt-3 mb-2" />
      <div className="create-order">
        <h1 className="title mb-3">Онлайн запись</h1>
        <Muted active={getCitiesStatus === 'REQUEST'}>
          <form className="form">
            <div className="form__row mb-2">
              <Select
                name="city"
                onChange={formik.handleChange}
                value={values.city}
                options={cities}
                placeholder="Выберите город:"
              />
            </div>
            <Muted active={getTimeSlotsStatus === 'REQUEST'}>
              <div className="form__row mb-2">
                <div className="form__column mr-1">
                  <Select
                    name="date"
                    onChange={formik.handleChange}
                    value={values.date}
                    options={days}
                    placeholder="Дата:"
                  />
                </div>
                <div className="form__column">
                  <Select
                    name="time"
                    onChange={formik.handleChange}
                    value={values.time}
                    options={[]}
                    placeholder="Время:"
                  />
                </div>
              </div>
            </Muted>
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
        </Muted>
      </div>
    </>
  );
};

export default CreateOrder;
