import React from 'react'
import styled from 'styled-components'
import faq from 'raw-loader!../faq.txt'
import Question from 'components/Question'

const allFaqs=faq.split("\n");
var faqObj=[];

//turns allFaqs from array of every line in ../faq.txt into faqObj filled with {question, answer} objects
for(var i=1; i<allFaqs.length; i++)
{
	if(allFaqs[i-1].trim().toLowerCase()=="question")
	{
		for(var ans=i; ans<allFaqs.length; ans++)
		{
			if(allFaqs[ans].trim().toLowerCase()=="answer")
			{
				faqObj.push({question: allFaqs[i], answer: allFaqs[ans+1]});
			}
		}
	}
}

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`
console.log(faqObj);

export default () => (
  <Wrapper>
	{faqObj.map(faqSet => (
		<Question question={faqSet.question} answer={faqSet.answer} />
	))}
  </Wrapper>
)
