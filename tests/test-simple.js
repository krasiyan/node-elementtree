/*
 *  Copyright 2011 Rackspace
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

var et = require('elementtree');

exports['test_simplest'] = function(test, assert) {
  /* Ported from <https://github.com/lxml/lxml/blob/master/src/lxml/tests/test_elementtree.py> */
  var Element = et.Element
  var root = Element('root');
  root.append(Element('one'));
  root.append(Element('two'));
  root.append(Element('three'));
  assert.equal(3, root.len())
  assert.equal('one', root.getItem(0).tag)
  assert.equal('two', root.getItem(1).tag)
  assert.equal('three', root.getItem(2).tag)
  test.finish();
};


exports['test_attribute_values'] = function(test, assert) {
  var XML = et.XML;
  var root = XML('<doc alpha="Alpha" beta="Beta" gamma="Gamma"/>');
  assert.equal('Alpha', root.attrib['alpha']);
  assert.equal('Beta', root.attrib['beta']);
  assert.equal('Gamma', root.attrib['gamma']);
  test.finish();
};


exports['test_findall'] = function(test, assert) {
  var XML = et.XML;
  var root = XML('<a><b><c/></b><b/><c><b/></c></a>');
  assert.equal(root.findall("c").length, 1);
  assert.equal(root.findall(".//c").length, 2);
  /*assert.equal(root.findall(".//b").length, 3);
  assert.equal(root.findall(".//b")[0].length, 1);
  assert.equal(root.findall(".//b")[1].length, 0);
  assert.equal(root.findall(".//b")[2].length, 0);*/

  test.finish();
};
