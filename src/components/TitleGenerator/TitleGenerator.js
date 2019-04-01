import React, { Component } from 'react';
import GeneratorTemplate from '../GeneratorTemplate/GeneratorTemplate';

class TitleGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textareaResult: null,
			javascriptVisibility: true
		};
	}

	generateCodePHP = (titles, urls) => {
		let result = '';

		titles.map((title, index) => {
			result += `<?php\n`;
			result += `	if($_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] == "${urls[index]}") {\n`;
			result += `	   echo '<title>${title}</title>'\n`;
			result += `	  }\n`;
			result += `?>\n`;
			result += `\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	generateCodeSMARTY = (titles, urls) => {
		let result = '';

		titles.map((title, index) => {
			result += `{if $smarty.server.REQUEST_URI eq "${urls}"} \n`;
			result += `	   echo '<title>${title}</title>'\n`;
			result += `{/if} \n`;
			result += `\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	generateCodeJS = (titles, urls) => {
		let result = '';

		titles.map((title, index) => {
			result += `if(window.location.href === '${urls}'){\n`;
			result += `document.title = '${title}';\n`;
			result += `}\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	message = 'Choose in which language code should be generated, you can choose PHP, SMARTY and JavaScript, next enter titles and urls in text areas all of those should by separated by ENTER, now you can generate code or save it to file.';

	render() {
		return (
			<div className="title-generator">
				<GeneratorTemplate
					generateCodePHP={this.generateCodePHP}
					generateCodeSMARTY={this.generateCodeSMARTY}
					generateCodeJS={this.generateCodeJS}
					javascriptVisibility={this.state.javascriptVisibility}
					textareaResult={this.state.textareaResult}
					generatorType={'Title'}
					generatorTypes={'titles'}
					message={this.message}
				/>
			</div>
		);
	}
}

export default TitleGenerator;
