/**
 * PickerField Component Demo for tingle
 * @author longyan
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

import React from 'react';
import Group from 'salt-group';
import Picker from 'salt-picker';
import Button from 'salt-button';

// build之后, 测试一下下面一行, 把上面一行注释掉
// const PickerField = require('../../dist');

const monthArray = [
  {
    value: 0, text: '一月', label: '第一个月', phonetic: ['yi', 'yue'],
  },
  {
    value: 1, text: '二月', label: '第二个月', phonetic: ['er', 'yue'],
  },
  {
    value: 2, text: '三月', label: '第三个月', phonetic: ['san', 'yue'],
  },
  {
    value: 3, text: '四月', label: '第四个月', phonetic: ['si', 'yue'],
  },
  {
    value: 4, text: '五月', label: '第五个月', phonetic: ['wu', 'yue'],
  },
  {
    value: 5, text: '六月', label: '第六个月', phonetic: ['liu', 'yue'],
  },
  {
    value: 6, text: '七月', label: '第七个月', phonetic: ['qi', 'yue'],
  },
  {
    value: 7, text: '八月', label: '第八个月', phonetic: ['ba', 'yue'],
  },
  {
    value: 8, text: '九月', label: '第九个月', phonetic: ['jiu', 'yue'],
  },
  {
    value: 9, text: '十月', label: '第十个月', phonetic: ['shi', 'yue'],
  },
  {
    value: 10, text: '十一月', label: '第十一个月', phonetic: ['shi', 'yi', 'yue'],
  },
  {
    value: 11, text: '十二月', label: '第十二个月', phonetic: ['shi', 'er', 'yue'],
  },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);

    const t = this;
    t.state = {
      pickerVisible1: false,
      pickerVisible2: false,
      data: monthArray,
    };
  }

  showPicker = (index) => {
    this.setState({ [`pickerVisible${index}`]: true });
  }

  hidePicker = (index) => {
    this.setState({ [`pickerVisible${index}`]: false });
  }

  render() {
    const t = this;
    return (
      <div>
        <Group>
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">远程数据源</Group.Head>
          <Button onClick={() => { this.showPicker(1); }}>点击显示</Button>
          <Picker
            fetchUrl="https://www.easy-mock.com/mock/5a2f75a26ce8af6869ec49f0/saltui/picker-data?jsonp_param_name=callback"
            onConfirm={(value) => {
              alert(`value: ${JSON.stringify(value)}`);
              this.hidePicker(1);
            }}
            visible={t.state.pickerVisible1}
          />
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">本地数据源</Group.Head>
          <Button onClick={() => { this.showPicker(2); }}>点击显示</Button>
          <Picker
            options={t.state.data}
            onConfirm={(value) => {
              alert(`value: ${JSON.stringify(value)}`);
              this.hidePicker(2);
            }}
            filterOption={false}
            onSearch={(keyword) => {
              this.setState({ data: keyword ? monthArray.slice(4) : monthArray });
            }}
            visible={t.state.pickerVisible2}
          />
        </Group>
      </div>
    );
  }
}

export default Demo;
