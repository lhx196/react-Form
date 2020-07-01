import React, { useCallback } from 'react';
import { List, Button, InputItem, Picker } from 'antd-mobile';
import { Form, FormItem, useForm } from 'components/form';
import styles from './index.module.less';

const ListItem = List.Item;

const MyForm: React.FC = () => {
  const { form, submit } = useForm();

  // 校验成功，提交表单数据
  const onFinish = useCallback((values: any) => {
    console.log(values);
  }, []);

  // 自定义校验器测试
  const validator = useCallback(async (_rule, value) => {
    if (value == '111') {
      // throw new Error('不能输入111');
      await Promise.reject('不能输入111');
    }
  }, []);

  // 设置默认值
  const setFieldsValue = useCallback(() => {
    form.setFieldsValue({ name: 'abc', phone: '13899999999', validator: '123', sex: ['女'] });
  }, []);

  const pickOption = [
    { label: '男', value: '男' },
    { label: '女', value: '女' },
  ];

  return (
    <div className={styles.main}>
      <Form form={form} onFinish={onFinish}>
        <FormItem rules={[{ min: 2, message: '请输入正确姓名', required: true }]} name="name">
          <InputItem className={styles.myinput} placeholder="请输入姓名">
            输入姓名
          </InputItem>
        </FormItem>
        <FormItem
          rules={[{ len: 11, pattern: /^1[3456789]\d{9}$/, message: '请输入正确手机号码', required: true }]}
          name="phone"
        >
          <InputItem className={styles.myinput} maxLength={11} placeholder="请输入phone">
            输入电话
          </InputItem>
        </FormItem>
        <FormItem rules={[{ message: '自定义validator不通过', required: true, validator: validator }]} name="validator">
          <InputItem labelNumber={11} className={styles.myinput} placeholder="自定义validator测试">
            自定义validator测试
          </InputItem>
        </FormItem>
        <FormItem rules={[{ required: true }]} name="sex">
          <Picker cols={1} data={pickOption}>
            <ListItem>性别</ListItem>
          </Picker>
        </FormItem>
        <Button type="primary" onClick={submit}>
          Submit
        </Button>
        <Button
          onClick={() => {
            setFieldsValue();
          }}
        >
          setFieldsValue
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
