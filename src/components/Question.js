import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 25px;
  margin: 20px 0px;
  background-color: #BBB;
  border-radius: 25px;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  justify-content: center;
`

const Answers = styled.div`
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export default ({question, answer, ...props}) => (
	<Wrapper>
		<p>
			{question}
		</p>
		<Answers>
			{answer.map(ans => (
				<p>
					{ans}
				</p>
				)
			)}
		</Answers>
	</Wrapper>
)