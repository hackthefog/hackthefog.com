import React from 'react'
import styled from 'styled-components'
import faq from 'raw-loader!../faq.txt'
import Question from 'components/Question'

const allFaqs=faq.split("\n");
var faqObj=[];

//turns allFaqs from array of every line in ../faq.txt into faqObj filled with {question, [answer]} objects
for(var currentLine=1; currentLine<allFaqs.length; currentLine++)
{
  //If line before current was a blank
  if(allFaqs[currentLine-1].trim()==="")
  {
    //make new object in array to array.map() and increment current line so that the question doesn't become part of the answer
  	faqObj[faqObj.length]={question: allFaqs[currentLine], answer: []};
    currentLine++;
  	for(var ans=currentLine; ans<allFaqs.length; ans++)
  	{
      //loops and adds each following line as another array item in faqObj.answer[] until it finds next blank line
  		if(allFaqs[ans].trim()==="")
  		{
  			break;
  		}
  		faqObj[faqObj.length-1].answer[faqObj[faqObj.length-1].answer.length]=allFaqs[ans];
  	}
  }
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

export default () => (
	<Wrapper>
		{faqObj.map(faqSet => (
			<Question question={faqSet.question} answer={faqSet.answer} />
		))}
	</Wrapper>
)
