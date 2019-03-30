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
			result += `	if("${urls[index]}" === {$_SERVER['HTTP_HOST']} . {$_SERVER['REQUEST_URI']}){\n`;
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
			result += `<script> \n`;
			result += `if(window.location.href === '${urls}'){\n`;
			result += `document.querySelector('meta[name="description"]').setAttribute("content", '${title}');\n`;
			result += `}\n`;
			result += `</script>\n`;
			this.setState({ textareaResult: result });
			return true;
		});
		return result;
	};
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
                />
			</div>
		);
	}
}

export default DescriptionGenerator;