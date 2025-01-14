import React from 'react';
import TextAreaItem from '../../Ingredients/TextAreaItem';
import FavoriteTab from '@meal/FavoriteTab';
import { Tab } from 'semantic-ui-react';
import DictionaryTab from '../DictionaryTab';
import * as S from './style';

const panes = [
  {
    menuItem: 'Tex',
    render: function tabContent() {
      return (
        <Tab.Pane>
          <TextAreaItem></TextAreaItem>
        </Tab.Pane>
      );
    },
  },
  {
    menuItem: '그리기',
    render: function tabContent() {
      return <Tab.Pane>그리기 판</Tab.Pane>;
    },
  },
  {
    menuItem: '수식사전',
    // render: () => <DictionaryTab />,
    render: function tabContent() {
      return <DictionaryTab />;
    },
  },
  {
    menuItem: '즐겨찾기',
    render: function tabContent() {
      return <FavoriteTab />;
    },
  },
];

function InputContents() {
  return (
    <S.ContentsContainer>
      <Tab panes={panes} />
    </S.ContentsContainer>
  );
}

export default InputContents;
