import React from 'react';

import './CustomButton.scss';

export enum E_TYPE_BUTTON {
  CLEAR_ALL_FILTER,
  EDIT_COLUMN,
  IMPORT_PRODUCT,
  EXPORT_PRODUCT,
  CREATE_PRODUCT,
  UPDATE,
  DELETE,
}

interface ICustomButtonProps {
  type_button: E_TYPE_BUTTON;
  onClick: any;
  title: string;
  className?: string;
}

const CustomButton = (props: ICustomButtonProps) => {
  const { type_button, onClick, title, className } = props;
  const renderButton = () => {
    switch (type_button) {
      case E_TYPE_BUTTON.CLEAR_ALL_FILTER:
        return (
          <div className='custom-button btn-clear-all-filter'>{title}</div>
        );
      case E_TYPE_BUTTON.EDIT_COLUMN:
        return <div className='custom-button btn-edit-column'>{title}</div>;
      case E_TYPE_BUTTON.IMPORT_PRODUCT:
        return <div className='custom-button btn-import-file'>{title}</div>;
      case E_TYPE_BUTTON.EXPORT_PRODUCT:
        return <div className='custom-button btn-export-file'>{title}</div>;
      case E_TYPE_BUTTON.CREATE_PRODUCT:
        return <div className='custom-button btn-create-product'>{title}</div>;
      case E_TYPE_BUTTON.UPDATE:
        return (
          <div
            style={{
              marginLeft: 0,
              minWidth: "fit-content"
            }}
            className={`custom-button btn-update ${className}`}
          >
            {title}
          </div>
        );
      case E_TYPE_BUTTON.DELETE:
        return (
          <div
            style={{
              marginLeft: 0,
              minWidth: "fit-content"
            }}
            className='custom-button btn-delete'
          >
            {title}
          </div>
        );
      default:
        return null;
    }
  };
  return <>{renderButton()}</>;
};

export default CustomButton;
