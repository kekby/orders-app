// @flow

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from 'store/orders/actions';
import { ordersSelector } from 'store/orders/selectors';
import Brand from 'components/Brand';
import './styles.scss';

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector);
  const onOrderDelete = (id) => dispatch(deleteOrder(id));

  return (
    <div>
      <Brand className="mt-3 mb-2" />
      <h1 className="title mb-3">Записи</h1>
      {orders.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>City ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={`${order.id}`}>
                <td>{order.city}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.time}</td>
                <td>
                  <button type="button" onClick={() => onOrderDelete(order.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет записей</p>
      )}
    </div>
  );
};

export default Order;
