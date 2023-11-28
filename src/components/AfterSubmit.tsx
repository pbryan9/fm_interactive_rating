import styled from 'styled-components';
import thankYouImg from '../assets/illustration-thank-you.svg';
import { COLORS } from '../lib/styles';
import Headline from './Headline';

type AfterSubmitProps = {
  score: number;
};

export default function AfterSubmit({ score }: AfterSubmitProps) {
  return (
    <>
      <ImgWrapper>
        <img src={thankYouImg} />
      </ImgWrapper>
      <Recap>You selected {score} out of 5</Recap>
      <ContentWrapper>
        <Headline>Thank you!</Headline>
        <Message>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Message>
      </ContentWrapper>
    </>
  );
}

const ImgWrapper = styled.div`
  margin-block-start: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Recap = styled.aside`
  border-radius: 9999px;
  padding: 8px 12px 6px;
  line-height: 1;
  display: flex;
  align-items: center;

  background-color: hsl(${COLORS['dk-blue']});
  color: hsl(${COLORS.orange} / 0.8);
`;

const Message = styled.p`
  text-align: center;
  color: hsl(${COLORS['lt-grey']});

  margin-block-end: 24px;
`;
