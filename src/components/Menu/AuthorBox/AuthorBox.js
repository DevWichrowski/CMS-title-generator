import React from 'react';
import './AuthorBox.scss';
import { Modal, Button, Figure } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function AuthorBox(props) {
	return (
		<div className="author-box">
			<Modal show={props.authorboxVisibility} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Author</Modal.Title>
				</Modal.Header>
				<Figure className="figure-img">
					<Figure.Image
						width={171}
						height={180}
						alt="171x180"
						src={require('../../../assets/me.png')}
						roundedCircle
					/>
					<p id="name-surname">Patryk Wichrowski</p>
					<div className="icons">
						<a href="https://github.com/DevWichrowski">
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com/in/patryk-wichrowski-152300145/">
							<FaLinkedin />
						</a>
					</div>
				</Figure>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.handleClose}>
						Close
					</Button>
					{/* <Button variant="success" onClick={props.handleClose} disabled>
						Tip for beer <FaBeer />
					</Button> */}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
