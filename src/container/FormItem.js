import React from 'react';
import {
  Form,
} from 'antd';

const FormItem = ({ isView, ...props }) => {
  const data = React.createElement('div', null, 'Hello World');
  let formProps = props;
  if (isView) {
    formProps = Object.assign({}, props, { children: data });
  }
  return (
    <Form.Item {...formProps}></Form.Item>
  );
};

export default FormItem;
