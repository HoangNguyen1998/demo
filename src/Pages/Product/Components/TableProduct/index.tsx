import React from 'react';
import './TableProduct.scss';
import { Image } from 'antd';
import TableImage from '../../../../Images/table-image.png';
import FilterIcon from '../../../../Images/filter-icon.png';
import CustomButton from '../../../../Components/CustomButton';
import { E_TYPE_BUTTON } from '../../../../Components/CustomButton';
import { Pagination } from 'antd';

const RowTable = (props: any) => {
  const { row } = props;
  const renderCategory = (category: any) => {
    return category.map((item: any, index: number) => (
      <div className='category-item'>{item}</div>
    ));
  };
  return (
    <div className='row-content'>
      <div className='column1 text-align-center custom-border'>{row.name}</div>
      <div className='column2 text-align-center custom-border'>
        <Image src={TableImage} />
      </div>
      <div className='column3 text-align-center custom-border'>{row.SKU}</div>
      <div className='column4 text-align-center wrap-category custom-border'>
        {/* <div style={{ display: 'flex' }}>  */}
        {renderCategory(row.category)}
        {/* </div> */}
      </div>
      <div className='column5 text-align-center custom-border'>
        {row.sellAmount}
      </div>
      <div className='column6 text-align-center custom-border'>
        {row.createdDate}
      </div>
      <div className='column7 text-align-center custom-border'>
        {row.status}
      </div>
      <div className='column8 text-align-center'>
        <CustomButton
          type_button={E_TYPE_BUTTON.UPDATE}
          title='Cập nhật'
          onClick={() => {}}
          className='btn-update'
        />
        <CustomButton
          type_button={E_TYPE_BUTTON.DELETE}
          title='Xoá'
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

const TableProduct = (props: any) => {
  const data = [
    {
      name: 'Áo thể thao',
      image: '',
      SKU: 'ZG011AQA',
      category: ['Thời trang nam', 'Áo thun', 'SMAKER'],
      sellAmount: 30,
      createdDate: '19/02/22',
      status: 'Mở bán',
      action: '',
    },
    {
      name: 'Áo thể thao',
      image: '',
      SKU: 'ZG011AQA',
      category: ['Thời trang nam', 'Áo thun', 'SMAKER'],
      sellAmount: 30,
      createDate: '19/02/22',
      status: 'Mở bán',
      action: '',
    },
  ];
  const renderRow = () => {
    return data.map((item: any, index: number) => (
      <RowTable key={index} row={item} />
    ));
  };
  return (
    <div className='table-product-container'>
      <div className='table-header'>
        <div className='column1 text-align-center custom-border'>
          Tên sản phẩm <Image src={FilterIcon} />
        </div>
        <div className='column2 text-align-center custom-border'>Hình ảnh</div>
        <div className='column3 text-align-center custom-border'>
          SKU <Image src={FilterIcon} />
        </div>
        <div className='column4 text-align-center custom-border'>
          Danh mục <Image src={FilterIcon} />
        </div>
        <div className='column5 text-align-center custom-border'>
          Số lượng bán <Image src={FilterIcon} />
        </div>
        <div className='column6 text-align-center custom-border'>
          Ngày tạo <Image src={FilterIcon} />
        </div>
        <div className='column7 text-align-center custom-border'>
          Trạng thái <Image src={FilterIcon} />
        </div>
        <div className='column8 text-align-center'>Hành động</div>
      </div>
      <div className='table-content'>{renderRow()}</div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default TableProduct;
