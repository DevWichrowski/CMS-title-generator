import React from 'react';
import './ButtonGenerate.scss';

export default function ButtonGenerate(props) {
	return (
		<div className="button-generate" onClick={props.submit}>
			<p>
				<a
					className="btn btn-primary"
					data-toggle="collapse"
					href="#collapseExample"
					role="button"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Generate
				</a>
			</p>
			<div className="collapse" id="collapseExample">
				<textarea className="custom-textarea" value={props.textareaResult} />
			</div>
		</div>
	);
}
