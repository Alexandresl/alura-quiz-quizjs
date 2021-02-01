import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>JavaScript Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste seus conhecimentos sobre o universo Javascript,
              incluindo React, Node.JS, Next.JS, etx...
            </p>
            <form onSubmit={function enviar(e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo uma submissão por meio do React.');

              // Router manda para a próxima página.
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Diz aí seu nome..."
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Usuáro/Jogo</p>
            <p>Usuáro/Jogo</p>
            <p>Usuáro/Jogo</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alexandresl/alura-quiz-quizjs" />
    </QuizBackground>
  );
}
