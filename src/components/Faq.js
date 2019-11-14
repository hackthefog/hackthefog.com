import React from 'react'
import styled from 'styled-components'
//Imports faq.txt into one mega string
import faq from 'raw-loader!../faq.txt'
import Question from 'components/Question'

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
  while ((FAQCount && faqs.length < FAQCount) && i < allLines.length)
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

const Wrapper = styled.div`
	display: flex;
	width: calc(100vw-200px);
	margin: 0.5rem 0;
	padding: 10px 0px 0px;
  margin: 20px 0px;
  background-color: #AAA;
  border-radius: 25px;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`

export default ({number}) => (
	<Wrapper>
    {
      processFAQs(parseInt(number)).map(faqSet => (
  			<Question question={faqSet.question} answer={faqSet.answer}/>
  		))
    }
	</Wrapper>
)
