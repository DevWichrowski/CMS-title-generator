import React, { Component } from 'react';
import GeneratorTemplate from '../GeneratorTemplate/GeneratorTemplate';

class DescriptionGenerator extends Component {
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
			result += `	   echo '<meta name="description" content="${title}">'\n`;
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
			result += `	   echo '<meta name="description" content="${title}">'\n`;
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
			result += `document.querySelector('meta[name="description"]').setAttribute("content", '${title}');\n`;
			result += `}\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};

	message = 'Choose in which language code should be generated, you can choose PHP, SMARTY and JavaScript, next enter descriptions and urls in text areas all of those should by separated by ENTER, now you can generate code or save it to file.';

	render() {
		return (
			<div className="description-generator">
				<GeneratorTemplate
					generateCodePHP={this.generateCodePHP}
					generateCodeSMARTY={this.generateCodeSMARTY}
					generateCodeJS={this.generateCodeJS}
					javascriptVisibility={this.state.javascriptVisibility}
					textareaResult={this.state.textareaResult}
					generatorType={'Description'}
					generatorTypes={'descriptions'}
					message={this.message}
				/>
			</div>
		);
	}
}

export default DescriptionGenerator;
