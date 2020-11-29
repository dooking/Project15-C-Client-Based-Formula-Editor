import React, { useRef, useState } from 'react';
import DropDownItem from '@ingredients/DropDownItem';
import { FORMULA_HEADER, SYMBOL_HEADER, LatexContent } from '../../../lib/constants/latex-header';
import * as S from './style';
import FormulaItem from '../../Ingredients/FormulaItem';

function FormulaList() {
  const formulaRef = useRef<null | HTMLHeadingElement>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);
  const mouseHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'flex';
    }
  };
  const leaveHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };
  document.body.addEventListener('mouseleave', () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  });
  return (
    <>
      <S.FormulaContainer>
        <S.FormulaHeaderWrapper>
          {FORMULA_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.FormulaHeaderWrapper>
        <S.SymbolHeaderWrapper>
          {SYMBOL_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.SymbolHeaderWrapper>
      </S.FormulaContainer>
      <S.Contents ref={formulaRef} onMouseLeave={leaveHandler}>
        {nowFormulas.map((latexInfo, index) => (
          <FormulaItem key={index} latexInfo={latexInfo} formulaRef={formulaRef}></FormulaItem>
        ))}
      </S.Contents>
    </>
  );
}

export default FormulaList;
