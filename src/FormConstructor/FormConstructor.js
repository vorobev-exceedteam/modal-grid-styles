// Сверстать форму согласно макетам
// https://www.figma.com/file/rPgUBStbtm2S7ySOQ4Lhb3/test-css-form

// примечания:
// 1. не обязательно пиксель перфект
// 2. использовать css-grid
// 3. использовать css модули
// 4. можно менять структуру react элементов

import { Form } from "antd";

import { Label } from "uiKit/Label";
import { CustomButton } from "uiKit/CustomButton/CustomButton";
import styles from './FormConstructor.module.scss'
const FormItem = Form.Item;

const initialValues = {
  firstName: "John",
  lastName: "Brown",
  sex: "male",
  address: "New York No. 1 Lake Park",
  age: 32
};

export const FormConstructor = ({ onCancel }) => {
  return (
    <div>
      <Form className={styles.formContainer} initialValues={initialValues} labelAlign="left" colon={false}>
        <FormItem className={styles.formField} label="First Name" name="firstName">
          <Label className={styles.formValue} />
        </FormItem>
        <FormItem className={styles.formField} label="Last Name" name="lastName">
          <Label className={styles.formValue}/>
        </FormItem>
        <FormItem className={styles.formField} label="Sex" name="sex">
          <Label className={styles.formValue}/>
        </FormItem>
        <FormItem className={styles.formField} label="Age" name="age">
          <Label className={styles.formValue}/>
        </FormItem>
        <FormItem className={styles.formField} label="Address" name="address">
          <Label className={styles.formValue}/>
        </FormItem>
      </Form>
      <div className={styles.fromActions}>
        <CustomButton onClick={onCancel}>Ок</CustomButton>
        <CustomButton type="primary" onClick={onCancel}>
          Закрыть
        </CustomButton>
      </div>
    </div>
  );
};
