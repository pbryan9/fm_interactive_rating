import styled from 'styled-components';

import { COLORS, SCREENS } from '../lib/styles';

import Star from '../assets/icon-star.svg';

const SCORES = Array.from({ length: 5 }, (_, i) => i + 1);

type ScoreInputProps = {
  submitForm: (score: number) => void;
  selectedScore: number | null;
  setSelectedScore: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function ScoreInput({
  submitForm,
  selectedScore,
  setSelectedScore,
}: ScoreInputProps) {
  return (
    <>
      <StarIconWrapper>
        <StarIcon src={Star} alt='star' width={16} height={16} />
      </StarIconWrapper>
      <ContentWrapper>
        <Headline>How did we do?</Headline>
        <Message>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Message>
      </ContentWrapper>
      <ScoreWrapper>
        {SCORES.map((score) => (
          <ScoreButton
            key={score}
            onClick={() => setSelectedScore(score)}
            className={selectedScore === score ? 'selected' : ''}
          >
            {score}
          </ScoreButton>
        ))}
      </ScoreWrapper>
      <SubmitButton
        onClick={() => selectedScore !== null && submitForm(selectedScore)}
        disabled={selectedScore === null}
      >
        SUBMIT
      </SubmitButton>
    </>
  );
}

const StarIconWrapper = styled.div`
  background-color: hsl(${COLORS['dk-blue']});

  width: fit-content;
  padding: 12px;

  border-radius: 9999px;
`;

const StarIcon = styled.img`
  width: 12px;
  height: 12px;

  object-fit: contain;

  @media screen and (min-width: ${SCREENS.mobile}) {
    width: 16px;
    height: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Headline = styled.h1`
  font-size: var(--fs-headline);
  font-weight: var(--fw-bold);

  @media screen and (min-width: ${SCREENS.mobile}) {
    font-size: 1.75rem;
  }
`;

const Message = styled.p`
  color: hsl(${COLORS['md-grey']});
`;

const ScoreWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

const ScoreButton = styled.button`
  height: 40px;
  aspect-ratio: 1 / 1;

  background-color: hsl(${COLORS['dk-blue']});
  color: hsl(${COLORS['md-grey']});
  border: none;
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 9999px;

  transition:
    background-color var(--transition-duration),
    color var(--transition-duration);

  &:hover {
    background-color: hsl(${COLORS.orange});
    color: hsl(${COLORS.white});
  }

  &.selected {
    background-color: hsl(${COLORS['lt-grey']});
    color: hsl(${COLORS.white});
  }

  @media screen and (min-width: ${SCREENS.mobile}) {
    font-size: 16px;
    height: 48px;
  }
`;

const SubmitButton = styled.button`
  background-color: hsl(${COLORS.orange});
  color: inherit;

  border: none;

  border-radius: 9999px;
  padding: 12px 0 8px;

  font-size: var(--fs-standard);
  letter-spacing: 2px;

  transition:
    background-color var(--transition-duration),
    color var(--transition-duration);

  &:hover {
    background-color: hsl(${COLORS.white});
    color: hsl(${COLORS.orange});
  }
`;
