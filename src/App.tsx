import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from './lib/styles';

import ScoreInput from './components/ScoreInput';
import AfterSubmit from './components/AfterSubmit';

function App() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  function submitForm(score: number) {
    console.log('Form submitted with a score of', score);

    setFormIsSubmitted(true);
  }

  return (
    <AppWrapper $formIsSubmitted={formIsSubmitted}>
      {formIsSubmitted && selectedScore !== null ? (
        <AfterSubmit score={selectedScore} />
      ) : (
        <ScoreInput {...{ selectedScore, setSelectedScore, submitForm }} />
      )}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.main<{ $formIsSubmitted: boolean }>`
  --gap: 24px;
  --padding: 24px;

  /* color */
  background-image: linear-gradient(
    hsl(${COLORS['dk-blue']} / 0.8),
    hsl(${COLORS['dk-blue']} / 0.3)
  );
  color: hsl(${COLORS.white});

  /* positioning */
  position: absolute;
  top: 50svh;
  left: 50vw;
  transform: translateX(-50%) translateY(-50%);

  /* size & shape */
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
  padding: var(--padding);
  border-radius: 24px;

  /* flex */
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: ${(props) => (props.$formIsSubmitted ? 'center' : 'initial')};
`;
