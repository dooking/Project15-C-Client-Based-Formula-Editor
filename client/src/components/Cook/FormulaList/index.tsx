import React, { useRef, useState } from 'react';
import { Header, Popup, Grid } from 'semantic-ui-react';
// import * as ButtonImage from '../../../../public/image/math.svg';
import Button from '../../Materials/Button';
import {
  FORMULA_HEADER,
  SYMBOL_HEADER,
  LatexHeader,
  LatexContent,
} from '../../../lib/constants/latex-header';
import * as S from './style';

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
            <Button
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></Button>
          ))}
        </S.FormulaHeaderWrapper>
        <S.SymbolHeaderWrapper>
          {SYMBOL_HEADER.map((latex, index) => (
            <Button
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></Button>
          ))}
        </S.SymbolHeaderWrapper>
      </S.FormulaContainer>
      <S.ContentsWrapper onMouseLeave={leaveHandler}>
        <S.Contents ref={formulaRef}>
          {nowFormulas.map((el) => {
            return (
              <>
                <img src={`image/${el.image}`} />
              </>
            );
          })}
        </S.Contents>
      </S.ContentsWrapper>
    </>
  );
}

export default FormulaList;
