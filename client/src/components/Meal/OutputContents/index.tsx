import React from 'react';
import TemplateButtons from '../FormatButtons';
import Content from '../OutputFormula';
import * as S from './style';

function OutputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <TemplateButtons></TemplateButtons>
      </S.ContentsHeader>
      <Content />
    </S.ContentsContainer>
  );
}

export default OutputContents;
