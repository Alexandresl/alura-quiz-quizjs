/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    // {/* <pre>
    //   <div style={{ color: 'black' }}>
    //     {JSON.stringify(dbExterno.questions, null, 4)}
    //   </div>
    // </pre> */}

  );
}

export async function getServerSideProps(context) {
  const [projecName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projecName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });
  return {
    props: {
      dbExterno,
    },
  };
}
