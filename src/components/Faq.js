import React from 'react'
import styled from 'styled-components'
import faq from 'raw-loader!../faq.txt'
import Question from 'components/Question'

const allFaqs=faq.split("\n");
var faqObj=new Array();

//turns allFaqs from array of every line in ../faq.txt into faqObj filled with {question, answer} objects
for(var i=1; i<allFaqs.length; i++)
{
	faqObj[faqObj.length]={question: allFaqs[i], answer: []};
	for(var ans=i; ans<allFaqs.length; ans++)
	{
		if(allFaqs[ans]==="")
		{
			break;
		}
		faqObj[faqObj.length-1].answer[faqObj[faqObj.length-1].answer.length]=allFaqs[ans];
	}
}

const Wrapper = styled.div`
  display: flex;
  width: calc(100vw-200px);
  margin: 0.5rem 0;
`

export default () => (
  <Wrapper>
	{faqObj.map(faqSet => (
		<Question question={faqSet.question} answer={faqSet.answer} />
	))}
  </Wrapper>
)
