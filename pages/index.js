import styled from 'styled-components'
import Head from 'next/head'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz JavaScript - AluraQuiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        {/* <!-- Primary Meta Tags --> */}
        <title>JavaScript Quiz</title>
        <meta name="title" content="JavaScript Quiz" />
        <meta name="description" content="" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alura-quiz.alexandresl.vercel.app/" />
        <meta property="og:title" content="JavaScript Quiz" />
        <meta property="og:description" content="Feito durante a Imersão Alura Quiz" />
        <meta property="og:image" content={db.bg} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alura-quiz.alexandresl.vercel.app/" />
        <meta property="twitter:title" content="JavaScript Quiz" />
        <meta property="twitter:description" content="Feito durante a Imersão Alura Quiz" />
        <meta property="twitter:image" content={db.bg}></meta>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>JavaScript Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre o universo Javascript, incluindo React, Node.JS, Next.JS, etx...</p>
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
      <GitHubCorner projectUrl="https://github.com/Alexandresl/" />
    </QuizBackground>
  );
}
