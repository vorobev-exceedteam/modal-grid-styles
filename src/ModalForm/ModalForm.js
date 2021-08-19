import { Modal } from "antd";

import { FormConstructor } from "FormConstructor/FormConstructor";
// import s from "./ModalForm.module.scss";

export const ModalForm = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      centered
      destroyOnClose
      footer={null}
      title="Просмотр записи"
      width="60vw"
      onCancel={onClose}
      // className={s.modal}
      closable={false}
    >
      <FormConstructor onCancel={onClose} />
    </Modal>
  )
};