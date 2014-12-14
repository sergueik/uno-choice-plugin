/*
 * The MIT License (MIT)
 * 
 * Copyright (c) <2014> <Ioannis Moutsatsos, Bruno P. Kinoshita>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.biouno.unochoice;

import static org.junit.Assert.assertEquals;
import hudson.model.FreeStyleProject;
import hudson.model.ParametersDefinitionProperty;

import java.util.List;

import org.biouno.unochoice.model.GroovyScript;
import org.junit.Rule;
import org.junit.Test;
import org.jvnet.hudson.test.JenkinsRule;

import com.gargoylesoftware.htmlunit.html.DomNode;
import com.gargoylesoftware.htmlunit.html.HtmlElement;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class TestRadioEvents {
	
	@Rule
	public JenkinsRule rule = new JenkinsRule();
	
	@Test
	public void testEvents() throws Exception {
		// Create Jenkins job
		FreeStyleProject project = rule.createFreeStyleProject("project1");

		// The choice parameter
		GroovyScript script1 = new GroovyScript("return ['A', 'B']", "return ['EMPTY!']");
		ChoiceParameter choiceParameterDefinition =
				new ChoiceParameter("param001", "param001 will trigger a change on param002", 
						script1, ChoiceParameter.PARAMETER_TYPE_RADIO, Boolean.FALSE);

		// The cascade dynamic choice parameter
		GroovyScript script2 = new GroovyScript("return ['LETTER-'+param001, 'Another option']", "return ['EMPTY!']");
		CascadeChoiceParameter cascadeChoiceParameterDefinition =
				new CascadeChoiceParameter("param002", "param002 will cascade param001", 
						script2, CascadeChoiceParameter.PARAMETER_TYPE_MULTI_SELECT, "param001", /* */ Boolean.TRUE);

		// Add both parameters to the job
		ParametersDefinitionProperty paramsProperty = 
				new ParametersDefinitionProperty(choiceParameterDefinition, cascadeChoiceParameterDefinition);
		project.addProperty(paramsProperty);

		// Go to the build with parameters page
		final HtmlPage page = rule.createWebClient().goTo("/job/project1/build?delay=0sec");

		// parameters div
		List<DomNode> parameters = page.getByXPath("//div[@name='parameter']");
		assertEquals("The job is expected to have two parameters", 2, parameters.size());
		
		DomNode radioParameter = parameters.get(0);
		// input radio buttons
		List<DomNode> radios = radioParameter.getByXPath("//input[@type='radio']");
		assertEquals("The first parameter is expected to have 2 radio buttons", 2, radios.size());
		
		HtmlElement radioButton = (HtmlElement) radios.get(1); // B
		radioButton.click();
		
		DomNode cascadeParameter = parameters.get(1);
		// select options
		List<DomNode> options = cascadeParameter.getByXPath("//option");
		assertEquals("The second parameter is expected to have 2 select options", 2, options.size());
		
		HtmlElement secondOption = (HtmlElement) options.get(0);
		assertEquals("The radio button didn't trigger a change on the cascade parameter", 
				"LETTER-B", secondOption.getTextContent());
	}

}
