import React from 'react';
import { Select, Input, Image } from 'antd';
import ImageDropDown from '../../../Images/drop-down.png';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const HIHI = () => <Image src={ImageDropDown} />;

const Filter = () => {
  return (
    <div className='product-filter-area'>
      <div className='filter-item search-item-width'>
        <div className='filter-name'>Tìm kiếm theo tên sản phẩm</div>
        <div className='search-item'>
          <Select
            showSearch
            placeholder='Select a person'
            optionFilterProp='children'
            defaultValue={'product_name'}
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            suffixIcon={''}
          >
            <Option value='product_name'>Tên sản phẩm</Option>
            <Option value='sku'>SKU</Option>
          </Select>
          <Input placeholder='Tìm kiếm ...' suffix={<SearchOutlined />} />
        </div>
      </div>
      <div className='filter-item filter-item-width'>
        <div className='filter-name'>Lọc theo danh mục</div>
        <div>
          <Select
            showSearch
            placeholder='Chọn danh mục'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            suffixIcon={<HIHI />}
          >
            <Option value='product_name'>Tên sản phẩm</Option>
            <Option value='sku'>SKU</Option>
          </Select>
        </div>
      </div>
      <div className='filter-item filter-item-width'>
        <div className='filter-name'>Lọc theo thời gian</div>
        <div>
          <Select
            showSearch
            placeholder='Chọn thời gian'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            suffixIcon={<HIHI />}
          >
            <Option value='product_name'>Tên sản phẩm</Option>
            <Option value='sku'>SKU</Option>
          </Select>
        </div>
      </div>
      <div className='filter-item filter-item-width'>
        <div className='filter-name'>Lọc theo đơn vị vận chuyển</div>
        <div>
          <Select
            showSearch
            placeholder='Chọn đơn vị'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            suffixIcon={<HIHI />}
          >
            <Option value='product_name'>Tên sản phẩm</Option>
            <Option value='sku'>SKU</Option>
          </Select>
        </div>
      </div>
      <div className='filter-item filter-item-width'>
        <div className='filter-name'>Lọc theo trạng thái</div>
        <div>
          <Select
            showSearch
            placeholder='Chọn trạng thái'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            suffixIcon={<HIHI />}
          >
            <Option value='product_name'>Tên sản phẩm</Option>
            <Option value='sku'>SKU</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
