import {Space, Input, Select} from "antd";
import PropTypes from 'prop-types';
function HeaderInputSearch({ className }) {

  const { Search } = Input;
  return (
    <div className={`header-input-search flex leading-none ${className}`}>
    <Space.Compact block>
      <Select
            className="h-9.8"
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
        />
        <Search size="large" className="h-10" placeholder="请输入要搜索的内容" enterButton="搜索" />
    </Space.Compact>
    </div>
  );
}

HeaderInputSearch.propTypes = {
  className: PropTypes.string,
};

export default HeaderInputSearch;