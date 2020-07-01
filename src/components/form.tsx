import React, { useCallback } from 'react';
// RefForm为源码export default 默认命名，此处跟随源码非官方文档示例
import RefForm, { Field } from 'rc-field-form';
import { List, Toast } from 'antd-mobile';
import { FormProps } from 'rc-field-form/es/Form';
import { FieldProps } from 'rc-field-form/es/Field';

// antd List自带属性
type TList = {
  renderHeader?: () => void;
  renderFooter?: () => void;
};

/**
 * 表单组件
 */
export const Form: React.FC<FormProps & TList> = ({ renderHeader, renderFooter, ...props }) => {
  const { children } = props;
  // 统一封装表单校验失败结果返回,可结合自定义ui toast进行统一提示处理
  const onFinishFailed = useCallback((errorInfo) => {
    Toast.fail(errorInfo.errorFields[0].errors[0], 2);
  }, []);

  return (
    <RefForm onFinishFailed={onFinishFailed} {...props}>
      <List renderHeader={renderHeader} renderFooter={renderFooter}>
        {children}
      </List>
    </RefForm>
  );
};

export const FormItem: React.FC<FieldProps> = (props) => {
  const { children } = props;
  return <Field {...props}>{children}</Field>;
};

/**
 * 表单 hooks
 */
export const useForm = () => {
  const [form] = RefForm.useForm();
  const { submit } = form;

  /**
   * 重置清空表单
   */
  const reset = useCallback(() => {
    form.resetFields();
  }, []);

  /**
   * 重置清空表单，并提交表单
   */
  const resetSubmit = useCallback(() => {
    reset();
    submit();
  }, []);

  return { form, submit, reset, resetSubmit };
};
