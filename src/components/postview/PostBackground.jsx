import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const Wrapper = styled.div`
  position: relative;
  height: 27em;
  margin-bottom: -7em;
  background: no-repeat 50% 50% / cover;
`;

const StyledMaxwidth = styled.div`
  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
`;

const Container = styled.div`
  width: 28rem;
  padding: 7rem 0 14.5rem;
  text-align: center;
  color: var(--gray-background-light);

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc((100% - 1224px) / 2 + 44rem);
    height: 100%;
    background: rgba(40, 48, 63, 0.5);
    z-index: 0;
  }
  .today {
    padding-left: 0.8em;
    font-size: 5rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.1;
    position: relative;
  }
  em {
    display: block;
    font-size: 2em;
    margin-bottom: -0.15em;
    position: relative;
  }
`;

function PostBackground(props) {
  const { postId } = useParams();
  
  const post = data.posts.find((item) => {
    return item.id == postId;
  });

  return (
    <Wrapper style={{backgroundImage: `url(../..${post.contents[1].src})`}}>
			<StyledMaxwidth>
				<Container>
					<p class="today">May <em>25</em> Wednesday</p>
				</Container>
			</StyledMaxwidth>
		</Wrapper>
  );
}

export default PostBackground;