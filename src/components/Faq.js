import React from 'react'
import styled from 'styled-components'
//Imports faq.txt into one mega string
import faq from 'raw-loader!../faq.txt'
import Question from 'components/Question'

//used in making FAQ objects
var faqObj=[];

//Splits the faq lines into objects with {question: "String", answer: ["Array", "of", "Strings"]}
function processFAQs()
{
  //Separates the long one string into lines
  const allFaqs=faq.split("\n");
  //Using this variable because I can't .push() on answer:[] after creating it
  var answerArr=[];
  for(var currentLine=1; currentLine<allFaqs.length; currentLine++)
  {
    if(allFaqs[currentLine-1].trim()==="")
    {
      //Prevents loop from accessing faqObj[-1]
      if(faqObj.length>0)
      {
        faqObj[faqObj.length-1].answer=answerArr;
      }
      faqObj.push({question: allFaqs[currentLine], answer: []});
      //Reset array
      answerArr=[];
    }
    else
    {
      answerArr.push(allFaqs[currentLine]);
    }
  }
  //Includes the last lines of text
  faqObj[faqObj.length-1].answer=answerArr;
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

processFAQs();
export default () => (
	<Wrapper>
		{faqObj.map(faqSet => (
			<Question question={faqSet.question} answer={faqSet.answer} />
		))}
	</Wrapper>
)
