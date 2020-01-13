import React from 'react';
import {
  Form,
  Select,
  Radio,
  Button,
  Checkbox,
  Row,
  Col,
  Input,
  Cascader,
} from 'antd';

const { Option } = Select;

const cascaderOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const { useState } = React;
const Demo = (props) => {
  const [isView, setIsView] = useState(false);
  const changeView = () => {
    setIsView(!isView);
    // const formData = this.props.form.getFieldsValue();
    // for(let i in formData) {
    // }
    console.log(props.form.getFieldsValue());
  };

  const onCascaderChange = (event) => {
    // console.log('props.form.getFieldsValue()[fieldName];',props.form.getFieldsValue()[fieldName])
  };

  const renderFormItemElement = (jsxElement, fieldName, convertFormDaraToString) => {
    let data = props.form.getFieldsValue()[fieldName];
    if (typeof mapFormDaraToString === 'function') {
      // 调用自定义方法将表单数据转换成字符串
      data = convertFormDaraToString(data);
    } else {
      // 自动处理
      if (Array.isArray(data)) {
        data = data.join(', ');
      }
    }
    return !isView ? jsxElement : <div>{data}</div>;
  };

  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <div>
      <Button onClick={changeView}>改变浏览模式</Button>
      <Form {...formItemLayout}>
        <Form.Item label="Input">
          {
            getFieldDecorator('input', {
              rules: [{ required: true }],
            })(
              renderFormItemElement(<Input />, 'input'),
            )
          }
        </Form.Item>
        <Form.Item label="Select">
          {
            getFieldDecorator('select', {
              rules: [{ required: true }],
            })(renderFormItemElement(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="fff">FFFF</Option>
              </Select>, 'select',
            ))
          }
        </Form.Item>
        <Form.Item label="Radio">
          {
            getFieldDecorator('radio', {
              rules: [{ required: true }],
            })(renderFormItemElement(
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>, 'radio',
            ))
          }
        </Form.Item>
        <Form.Item label="Checkbox">
          {
            getFieldDecorator('checkbox', {
              rules: [{ required: true }],
            })(renderFormItemElement(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E">E</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>, 'checkbox',
            ))
          }
        </Form.Item>
        <Form.Item label="Cascader">
          {
            getFieldDecorator('cascader', {
              rules: [{ required: true }],
            })(renderFormItemElement(<Cascader options={cascaderOptions} onChange={onCascaderChange} placeholder="Please select" />, 'cascader'))
          }
        </Form.Item>

      </Form>
    </div>

  );
};

export default Form.create({ name: 'validate_other' })(Demo);
