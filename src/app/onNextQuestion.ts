import App from 'src/types/app';

export default async function onNextQuestion(
  e: MouseEvent,
  app: App,
  index: number | Array<number>
) {
  const question = app.questions[app.store.i];
  const questionType = app.questions[app.store.i].type;

  if (
    (questionType === 2 && (index as Array<number>).length === 0) ||
    (questionType === 1 && index === -1)
  ) {
    return;
  }
  if (questionType === 1) {
    if (index === question.correctAnswer) {
      app.store.scorePercentage += (1 / app.possibleMaxScore) * 100;
    }
  } else if (questionType === 2) {
    //select all that apply
    // for each correct answer, if it is selected, add 1 to the score
    (index as Array<number>).forEach((i) => {
      if ((question.correctAnswer as Array<number>).includes(i)) {
        app.store.scorePercentage += (1 / app.possibleMaxScore) * 100;
      } else {
        app.store.scorePercentage -= (1 / app.possibleMaxScore) * 100;
      }
    });
  }
  // console.log(app.store.scorePercentage, 'scorePercentage');

  //do a transition out based on next index
  if (
    app.store.i + 1 === app.questions.length ||
    (app.store.i + 1 === Math.round(app.questions.length / 2) && app.halfwayIsShown === false)
  ) {
    await app.sectionTransitionOut(`#quiz-page-last-question`, 750);
  } else {
    await app.sectionTransitionOut(`#quiz-page`, 750);
  }
  app.mountQuestion(app.store.i + 1);
}
