import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import faq from 'raw-loader!../faq.txt'

//Splits the faq lines into objects with {question: "String", answer: ["Array", "of", "Strings"]}
function processFAQs(FAQCount)
{
  //Separates the long one string into lines
  const allLines = faq
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.indexOf("//") !== 0); // remove comments

  var faqs = [];

  let i = 0;
  let obj = {
    question: false,
    answer: []
  };
  while ((!FAQCount || faqs.length < FAQCount) && i < allLines.length)
  {
    let line = allLines[i];

    if (!obj.question)
      obj.question = line;
    else if (line !== "")
      obj.answer.push(line);
    else {
      faqs.push(Object.assign({}, obj));
      obj = {
        question: false,
        answer: []
      };
    }
    i++;
  }
  return faqs;
}

const FAQDisplay = styled.div`
	display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;
  * { width: 100%; }
  ${theme.mediaQueries.md} {
    flex-direction: row;
  }
`

export default ({number}) => (
	<FAQDisplay>
    {
      processFAQs(parseInt(number)).map(faqSet => (
  			<Question question={faqSet.question} answer={faqSet.answer}/>
  		))
    }
	</FAQDisplay>
)

/**********************/
/***extra components***/
/**********************/

const QuestionWrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  font-size: 1.3em;
  ${theme.mediaQueries.md} {
    width: 50%;
    font-size: 1.5em
    padding: 2rem;
  }
  font-weight: bolder;
`

const Answer = styled.div`
  font-weight: lighter;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
`

const Question = ({question, answer, ...props}) => (
	<QuestionWrapper>
		<p>
			{question}
		</p>
		<Answer>
			{answer.map(ans => (
				<p>
					{ans}
				</p>
				)
			)}
		</Answer>
	</QuestionWrapper>
)
