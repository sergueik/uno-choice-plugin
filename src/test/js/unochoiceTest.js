/**
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

'use strict';

/**
 * @author Bruno P. Kinoshita <brunodepaulak@yahoo.com.br>
 */

/**
 * Create fixture DIV (hack for running with phantomJS and Maven)
 */
QUnit.testStart(function() {
 	var fixtures = jQuery('#qunit-tests').find('#qunit-fixture');
 	fixtures.each(function() {
 		jQuery(this).remove();
 	});
 	var hiddenDiv = document.createElement("div");
 	jQuery(hiddenDiv).attr('id', 'qunit-fixture');
 	jQuery('#qunit-tests').append(hiddenDiv);
 });

/**
 * Initial set up.
 */
QUnit.test("Tests UnoChoice module was loaded", function () {
	ok(UnoChoice !== null, "UnoChoice object exists");
});

/**
 * Tests for the endsWith function.
 */
//QUnit.test("Test endsWith", function(assert) {
//	assert.ok(UnoChoice.endsWith("Bruno", "uno"), "endsWith works as expected");
//});

/**
 * Tests for the fakeSelectRadioButton function.
 */
QUnit.test("Test fakeSelectRadioButton", function() {
	var $fixture = jQuery("#qunit-fixture");
	$fixture.append("<div><input type='radio' name='group1' class='myClazz' id='option1' /></div>");
	$fixture.append("<div><input type='radio' name='group1' class='myClazz' id='option2' /></div>");
	$fixture.append("<div><input type='radio' name='group1' class='myClazz' id='option3' /></div>");
	UnoChoice.fakeSelectRadioButton("myClazz", 'option2');
	equal("", jQuery("#option1").attr('name'), "option1 is empty");
	equal("value", jQuery("#option2").attr('name'), "option2 is not empty");
	equal("", jQuery("#option3").attr('name'), "option3 is empty");
});

/**
 * Tests for the getParameterValue / getSelectValues function.
 */
QUnit.test("Test getParameterValue", function() {
	var $fixture = jQuery("#qunit-fixture");
	$fixture.append("<select name='value' multiple><option value='1' selected>1</option><option value='2'>2</option><option value='3' selected>3</option></select>");
	var select = jQuery("select");
	var arr = UnoChoice.getParameterValue(select);
	equal(arr, '1,3', 'the content is correct');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using select.
 */
QUnit.test("Test getElementValue using select", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<select name='value' multiple><option value='1' selected>1</option><option value='2'>2</option><option value='3' selected>3</option></select>");
	var select = jQuery("select");
	var arr = UnoChoice.getParameterValue(select);
	equal(arr, '1,3', 'element value is correct for select');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using checkbox.
 */
QUnit.test("Test getElementValue using checkbox", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<input id='checkbox1' type='checkbox' name='value' checked='checked' value='123' />");
	var e = jQuery("#checkbox1");
	var val = UnoChoice.getParameterValue(e);
	equal(val, '123', 'element value is correct for checkbox');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using text.
 */
QUnit.test("Test getElementValue using text", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<input id='input1' type='text' name='value' checked='checked' value='1234' />");
	var e = jQuery("#input1");
	var val = UnoChoice.getParameterValue(e);
	equal(val, '1234', 'element value is correct for text');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using empty select.
 */
QUnit.test("Test getElementValue using empty select", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<select name='value'></select>");
	var select = jQuery("select");
	var val = UnoChoice.getParameterValue(select);
	equal(val, '', 'element value is correct for empty select');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using empty div.
 */
QUnit.test("Test getElementValue using div", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<div id='div1'>" +
			"<span>E agora?</span>" +
			"<div class='sub'>" +
			"<input type='text' name='name' value='parameter1'/>" +
			"<input type='text' name='value' value='123432'/>" +
			"</div>" +
			"</div>");
	var e = jQuery("#div1");
	var val = UnoChoice.getParameterValue(e);
	equal(val, '123432', 'element value is correct for div');
});

/**
 * Tests for the getParameterValue / getElementValue function. Using files.
 */
QUnit.test("Test getElementValue using files", function() {
	var $fixture = jQuery("#qunit-fixture");
	
	$fixture.append("<input type='file' name='myfile' value='1.txt'/>");
	var e = jQuery("input[type='file']");
	var val = UnoChoice.getParameterValue(e);
	equal(val, '', 'element value is correct for files'); // cannot set value due to security
});

/**
 * Tests for the CascadeParameter.
 */
QUnit.test("Test CascadeParameter class", function() {
	var $fixture = jQuery("#qunit-fixture");
	var cascadeParameter = new UnoChoice.CascadeParameter('sample-param', $fixture, /*proxy*/ undefined);
	ok(cascadeParameter, 'cascade parameter object creation working');
	deepEqual('sample-param', cascadeParameter.getParameterName(), 'parameter name is retrieved correctly');
	var anotherCascadeParameter = new UnoChoice.CascadeParameter('another-sample-param', $fixture, /*proxy*/ undefined);
	deepEqual('sample-param', cascadeParameter.getParameterName(), 'parameter name is retrieved correctly');
	deepEqual('another-sample-param', anotherCascadeParameter.getParameterName(), 'parameter name is retrieved correctly');
	deepEqual('sample-param', cascadeParameter.getParameterName(), 'parameter name is retrieved correctly');
});

/**
 * Tests for FilteredElement.
 */
QUnit.test("Test FilteredElement with selects", function() {
	var $fixture = jQuery("#qunit-fixture");
	$fixture.append('<select name="value" multiple="multiple" size="8"><option value="1">Bruno</option><option value="2">Nuno</option><option value="3">Joe</option><option selected="true" value="4">Jeea</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>');
	$fixture.append('<input class="uno_choice_filter" type="text" value="" name="test" placeholder="Filter">');
    var parameterHtmlElement = $fixture.find('*[name="value"]');
    if (parameterHtmlElement && parameterHtmlElement.get(0)) {
        var filterHtmlElement = $fixture.find('.uno_choice_filter');
        if (filterHtmlElement && filterHtmlElement.get(0)) {
            var filterElement = new UnoChoice.FilterElement(parameterHtmlElement.get(0), filterHtmlElement.get(0));
        } else {
            console.log('Filter error: Missing filter element!');
        }
    } else {
        log('Filter error: Missing parameter element!');
    }
    equal(8, jQuery(parameterHtmlElement).children().length, "Right select options count");
    filterElement.getFilterElement().value = 'uno';
    jQuery(filterElement.getFilterElement()).keyup();
    equal(2, jQuery(parameterHtmlElement).children().length, "Right select options count");
});



/**
 * Tests for the getParameterValue / getElementValue function for PT_RADIO document fragment generated by extended__choice__parameter jenkins plugin.
 */
QUnit.test("Test getElementValue using div", function() {
    var $fixture = jQuery("#qunit-fixture");
    $fixture.append(
    "<div description='' name='parameter' id='div1'>" +
      "<input name='name' value='PT_RADIO' type='hidden'/>" +
      "<div id='ecp_PT_RADIO'>" +
        "<table id='tbl_ecp_PT_RADIO'>" +
          "<tr id='ecp_PT_RADIO_0'>" +
            "<td>" +
              "<input name='PT_RADIO.value' value='1' type='radio'/>" +
              "<label class='attach-previous'>1</label>" +
            "</td>" +
          "</tr>" +
          "<tr id='ecp_PT_RADIO_1'>" +
            "<td>" +
              "<input name='PT_RADIO.value' value='2' type='radio' checked='true'/>" +
              "<label class='attach-previous'>2</label>" +
            "</td>" +
          "</tr>" +
          "<tr id='ecp_PT_RADIO_2'>" +
            "<td>" +
              "<input name='PT_RADIO.value' value='3' type='radio'/>" +
              "<label class='attach-previous'>3</label>" +
            "</td>" +
          "</tr>" +
        "</table>" +
      "</div>" +
    "</div>" 
    );
    var e = jQuery("#div1");
    var val = UnoChoice.getParameterValue(e);
    equal(val, '2', 'PT_RADIO element value discovery failed');
});



/**
 * Tests for the getParameterValue / getElementValue function for PT_CHECKBOX document fragment generated by extended__choice__parameter jenkins plugin.
 */
QUnit.test("Test getElementValue using div", function() {
    var $fixture = jQuery("#qunit-fixture");
    $fixture.append(
    "<div description='' name='parameter'  id='div1'>" +
      "<input name='name' value='PT_CHECKBOX' type='hidden'/>" +
      "<div id='ecp_PT_CHECKBOX'>" +
        "<table id='tbl_ecp_PT_CHECKBOX'>" +
          "<tr id='ecp_PT_CHECKBOX_0'>" +
            "<td>" +
              "<input json='1' name='value' value='1' class=' ' type='checkbox'/>" +
              "<label class='attach-previous'>1</label>" +
            "</td>" +
          "</tr>" +
          "<tr id='ecp_PT_CHECKBOX_1' style='white-space:nowrap'>" +
            "<td>" +
              "<input json='2' name='value' value='2' class=' ' type='checkbox' checked='true'/>" +
              "<label class='attach-previous'>2</label>" +
            "</td>" +
          "</tr>" +
          "<tr id='ecp_PT_CHECKBOX_2'>" +
            "<td>" +
              "<input json='3' name='value' value='3' class=' ' type='checkbox'/>" +
              "<label class='attach-previous'>3</label>" +
            "</td>" +
          "</tr>" +
          "<tr id='ecp_PT_CHECKBOX_3'>" +
            "<td>" +
              "<input json='2' name='value' value='4' class=' ' type='checkbox' checked='true'/>" +
              "<label class='attach-previous'>4</label>" +
            "</td>" +
          "</tr>" +
        "</table>" +
      "</div>" +
    "</div>" 
    );
    var e = jQuery("#div1");
    var val = UnoChoice.getParameterValue(e);
    equal(val, '2,4', 'PT_CHECKBOX element value discovery failed');
});



/**
 * Tests for the getParameterValue / getElementValue function for PT_SINGLE_SELECT document fragment generated by extended__choice__parameter jenkins plugin.
 */
QUnit.test("Test getElementValue using div", function() {
    var $fixture = jQuery("#qunit-fixture");
    $fixture.append(
"<div id='div1' description='' name='parameter'>" + 
  "<input name='name' value='Gender' type='hidden'/>" + 
  "<select name='value'>" + 
    "<option value='1'>1</option> " + 
    "<option selected='selected' value='2'>2</option>" + 
  "</select>" +
"</div>"
    );
    var e = jQuery("#div1");
    var val = UnoChoice.getParameterValue(e);
    equal(val, '2', 'PT_SINGLE_SELECT element value discovery failed');
});



/**
 * Tests for the getParameterValue / getElementValue function for PT_MULTI_SELECT document fragment generated by extended__choice__parameter jenkins plugin.
 */

QUnit.test("Test getElementValue using div", function() {
    var $fixture = jQuery("#qunit-fixture");
    $fixture.append(
    "<div description='' name='parameter' id='div1'>" +
      "<input name='name' value='PT_MULTI_SELECT' type='hidden'/>" +
      "<select name='value' multiple='multiple' size='4'>" +
        "<option value='1'>1</option>" +
        "<option selected='selected' value='2'>2</option>" +
        "<option selected='selected' value='3'>3</option>" +
        "<option value='4'>4</option>" +
      "</select>" +
    "</div>"
    );
    var e = jQuery("#div1");
    var val = UnoChoice.getParameterValue(e);
    equal(val, '2,3', 'PT_MULTI_SELECT element value discovery failed');
});

