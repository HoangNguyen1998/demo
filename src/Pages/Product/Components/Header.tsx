import React from 'react';
import CustomButton from '../../../Components/CustomButton';
import { E_TYPE_BUTTON } from '../../../Components/CustomButton';

const Header = () => {
  return (
    <div className='top-action-area'>
      <div className='title'>Danh sách các sản phẩm</div>
      <div className='action-area'>
        <CustomButton
          title='Bỏ tất cả bộ lọc'
          type_button={E_TYPE_BUTTON.CLEAR_ALL_FILTER}
          onClick={() => {}}
        />
        <CustomButton
          title='Điều chỉnh cột'
          type_button={E_TYPE_BUTTON.EDIT_COLUMN}
          onClick={() => {}}
        />
        <CustomButton
          title='Import sản phẩm'
          type_button={E_TYPE_BUTTON.IMPORT_PRODUCT}
          onClick={() => {}}
        />
        <CustomButton
          title='Export sản phẩm'
          type_button={E_TYPE_BUTTON.EXPORT_PRODUCT}
          onClick={() => {}}
        />
        <CustomButton
          title='Tạo sản phẩm'
          type_button={E_TYPE_BUTTON.CREATE_PRODUCT}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Header;
