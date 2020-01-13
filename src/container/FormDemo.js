import React from 'react';
import {
  Form,
  Select,
} from 'antd';
import FormItem from './FormItem';


const { Option } = Select;
const FormDemo = (props) => {
  const { form } = props;
  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  return (
    <Form {...formItemLayout}>
      <FormItem label="Select" isView={false}>
        {
          getFieldDecorator('select', {
            rules: [{ required: true }],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="fff">FFFF</Option>
            </Select>,
          )
        }
      </FormItem>
    </Form>
  );
};

export default Form.create({ name: 'form-demo' })(FormDemo);
