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
  padding: 0px;
  margin: 10px 0px;
  display: flex;
  margin: 0;
`

export default ({question, answer, ...props}) => (
	<Wrapper>
		<p>
			{question}
		</p>
		<Answers>
			{answer.map(ans => (
				<>
					<br/>
					<p>
						{ans}
					</p>
				</>
				)
			)}
		</Answers>
	</Wrapper>
)