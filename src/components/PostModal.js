import styled from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
	const [editorText,setEditorText] = useState("");
	const [shareImage,setShareImage] = useState("");

	const handleChange = (e) => {
		const image = e.target.files[0];

		if(image === "" || image===undefined){
			alert(`This is a ${typeof image} file, please select an Image file.`);
			return;
		}
		setShareImage(image);
	}

	const reset = () => {
		setEditorText("");
		props.clickHandler();
	}

    return(
	<>
	{props.showModal && <Container>
        <Content>
            <Header>
                <h2>Create a Post</h2>
                <button onClick={reset}>
                    <img src="/images/close-icon.svg" alt=""/>
                </button>
            </Header>
            <SharedContent>
							<UserInfo>
								<img src="/images/user.svg" alt=""/>
                                <span>Name</span>
							</UserInfo>
							<Editor>
								<textarea value={editorText} 
								onChange={(e)=>setEditorText(e.target.value)} 
								placeholder="What do you want to post?"
								autoFocus={true}/>
								<UploadImage>
									<input type="file" accept="image/gif, image/jpeg, image/png, image/jpg"
										name = "image" id="file" style={{display:"none"}}
										onChange={handleChange}
									/>
									<p>
										<label htmlFor="file" className="btnStyle">Select an image to share</label>
									</p>
									{shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
								</UploadImage>
							</Editor>
						</SharedContent>
						<ShareCreation>
							<AttachAssets>
                                <AssetButton>
                                    <img src="/images/share-image.svg" alt=""/>
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/share-video.svg" alt=""/>
                                </AssetButton>
                                <ShareComment>
                                    <AssetButton>
                                        <img src="/images/share-comment.svg" alt=""/>
                                    </AssetButton>
                                </ShareComment>
                                <PostButton disabled={!editorText?true:false}>Post</PostButton>
                            </AttachAssets>
						</ShareCreation>
					</Content>
    </Container>}
	</>) ;
}

const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.8);
	animation: fadeIn 0.3s ease;
`;

const Content = styled.div`
	width: 100%;
	max-width: 552px;
	max-height: 90%;
	background-color: #fff;
	overflow: initial;
	border-radius: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 32px;
	margin: 0 auto;
`;

const Header = styled.div`
	display: block;
	padding: 10px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	font-size: 20px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.9);
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		font-weight: 400;
	}
	button {
		width: 40px;
		height: 40px;
		min-width: auto;
		border: none;
		outline: none;
		background: transparent;
        cursor: pointer;
		img,
		svg {
			pointer-events: none;
		}
	}
`;

const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto;
	vertical-align: baseline;
	background: transparent;
	padding: 5px 12px;
`;

const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 24px;
	img {
		width: 48px;
		height: 48px;
		background-clip: content-box;
		border-radius: 50%;
		border: 2px solid transparent;
	}
	span {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		margin-left: 5px;
	}
`;

const ShareCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 24px 10px 16px;
`;

const AttachAssets = styled.div`
	display: flex;
	align-items: center;
`;

const AssetButton = styled.button`
	display: flex;
	align-items: center;
	height: 40px;
	min-width: auto;
	margin-right: 8px;
	border-radius: 50%;
	border: none;
	outline: none;
	justify-content: center;
	background: transparent;
	&:hover {
		background: rgba(0, 0, 0, 0.08);
	}
`;

const ShareComment = styled.div`
	padding-left: 8px;
	margin-right: auto;
	border-left: 1px solid rgba(0, 0, 0, 0.08);
	${AssetButton} {
		border-radius: 50px;
		padding: 5px 10px;
		span {
			font-size: 16px;
			font-weight: 600;
			color: rgba(0, 0, 0, 0.6);
			padding: 0 5px;
		}
	}
`;

const PostButton = styled.button`
	min-width: 60px;
	padding: 5px 16px;
	border-radius: 20px;
	background: ${(props) => (props.disabled ? "#b8b8b8" : "#0a66c2")};
	color: ${(props) => (props.disabled ? "#5a5a5a" : "#fff")};
	font-size: 16px;
	letter-spacing: 1.1px;
	border: none;
	outline: none;
	&:hover {
		background: ${(props) => (props.disabled ? "#b8b8b8" : "#004182")};
	}
`;

const Editor = styled.div`
	padding: 12px 24px;
	textarea {
		width: 100%;
		min-height: 100px;
		resize: none;
	}
	input {
		width: 100%;
		height: 35px;
		font-size: 16px;
		margin-bottom: 20px;
	}
`;

const UploadImage = styled.div`

	.btnStyle {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  width:100%;
	}
	img {
		width: 100%;
	}
	
`;


export default PostModal;

