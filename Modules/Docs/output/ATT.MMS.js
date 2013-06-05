Ext.data.JsonP.ATT_MMS({"inheritdoc":null,"extends":"ATT","uses":[],"subclasses":[],"superclasses":["ATT"],"meta":{},"component":false,"requires":[],"mixedInto":[],"files":[{"href":"attAPI.html#ATT-MMS","filename":"attAPI.js"}],"tagname":"class","enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/ATT' rel='ATT' class='docClass'>ATT</a><div class='subclass '><strong>ATT.MMS</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/attAPI.html#ATT-MMS' target='_blank'>attAPI.js</a></div></pre><div class='doc-contents'><p><b>Introduction:</b></p>\n\n<p>The Multimedia Messaging Service (MMS) API greatly enhances the power of your communications by moving beyond the text-only capabilities of Short Message Service (SMS) messaging. Using the MMS API, you can send Mobile Terminated or receive Mobile Originated) messages that include video, images and audio attachments as well as text.</p>\n\n<p><b>Description:</b></p>\n\n<p>The MMS API enables applications to send MMS messages and get the delivery status of the messages from the network. If an application hosts a service that complies with an AT&amp;T specified callback, the application can also receive MMS messages. AT&amp;T will deliver MMS messages to the application as soon as they arrive on the AT&amp;T network.</p>\n\n<p><b>Methods:</b></p>\n\n<p>1) getMMSDeliveryStatus</p>\n\n<p>2) sendMMS</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getMMSDeliveryStatus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.MMS'>ATT.MMS</span><br/><a href='source/attAPI.html#ATT-MMS-method-getMMSDeliveryStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.MMS-method-getMMSDeliveryStatus' class='name expandable'>getMMSDeliveryStatus</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Returns the status of a sent MMS message. ...</div><div class='long'><p>Returns the status of a sent MMS message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>An object containing the following properties:</p>\n<ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The MMS request id that is returned by the sendMMS method as part of the response object.</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n\n<p>The default value is: application/json</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request.</p>\n\n<p><strong>Example:</strong></p>\n\n<p>The following is an example of the getMMSDeliveryStatus method.</p>\n\n<pre><code> getMMSDeliveryStatus({\n             'id' : \"MMS ID that you get in response of sendMMS.\",\n             \"accept\" : \"application/json\",\n  },  function(data) {\n\n       success Callback\n\n  }, function(error) {\n\n       error Callback\n\n  });\n</code></pre>\n</div></li></ul></div></div></div><div id='method-sendMMS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.MMS'>ATT.MMS</span><br/><a href='source/attAPI.html#ATT-MMS-method-sendMMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.MMS-method-sendMMS' class='name expandable'>sendMMS</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Sends an MMS message to the specified recipient. ...</div><div class='long'><p>Sends an MMS message to the specified recipient.</p>\n\n<p>The Multimedia Messaging Service for the delivery of different file types please see the <a href=\"https://developer.att.com/developer/tierNpage.jsp?passedItemId=2400428\">Developer Documentation</a> for an updated list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>body</span> : Object<div class='sub-desc'><p>An Object containing all of the parameters that a user needs to send a message on an AT&amp;T mobile device. Valid parameters are:</p>\n<ul><li><span class='pre'>address</span> : String<div class='sub-desc'><p>The MSISDN of the recipient(s).For Multiple address,The value of this parameter will be an array of string.</p>\n</div></li><li><span class='pre'>subject</span> : String (optional)<div class='sub-desc'><p>The subject of the message.</p>\n</div></li><li><span class='pre'>priority</span> : String (optional)<div class='sub-desc'><p>The Priority of the message. Valid values are \"Default\", \"Low\", \"Normal\", and \"High\".</p>\n<p>Defaults to: <code>&quot;Default&quot;</code></p></div></li></ul></div></li><li><span class='pre'>attachments</span> : Array<div class='sub-desc'><p>An array of JSON Objects containing three key-value pairs. i.e. <i>{fileName:\"Name of the file\",fileType:\"Type of the file\",filePath:\"Path of the file\"}</i> The File can be image,audio,video or text.</p>\n</div></li><li><span class='pre'>contentType</span> : String<div class='sub-desc'><p>Specifies the format of the message content. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n\n<p>• application/x-www-form-urlencoded</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n<p>Defaults to: <code>&quot;application/json&quot;</code></p></div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request. This response object contains the MMS ID that is used in the id property of the options parameter in the getMMSDeliveryStatus method.</p>\n\n<p><strong>Examples:</strong></p>\n\n<p><b>1.</b> The following example of the sendMMS method uses a contentType of 'application/json'.</p>\n\n<pre><code>  sendMMS({\n      \"body\":{ \"address\" : \"tel:xxxxxxxxxx,tel:xxxxxxxxxx\", \"subject\" : \"Test MMS\", \"priority\" : \"High\" },\n      \"contentType\" : \"application/json\",\n      \"accept\" : \"application/json\",\n      \"attachments\" : [{'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/png\",'filePath' :\"Path of the file\"}, {'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/jpeg\",'filePath' :\"Path of the file\"}]\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><b>2.</b> The following example of the sendMMS method uses a contentType of 'application/xml'.</p>\n\n<pre><code>  sendMMS({\n      \"body\":\"&lt;outboundMessageRequest&gt;\" + \"\\n\" + \"&lt;address&gt;tel:xxxxxxxxxx&lt;/address&gt;\" + \"\\n\" + \"&lt;subject&gt;Test MMS&lt;/subject&gt;\" + \"\\n\" + \"&lt;priority&gt;High&lt;/priority&gt;\" + \"\\n\" + \"&lt;/outboundMessageRequest&gt;\",\n      \"contentType\" : \"application/xml\",\n      \"accept\" : \"application/json\",\n      \"attachments\" : [{'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/png\",'filePath' :\"Path of the file\"}, {'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/jpeg\",'filePath' :\"Path of the file\"}]\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><b>3.</b> The following example of the sendMMS method uses a contentType of 'application/x-www-form-urlencoded'.</p>\n\n<pre><code>  sendMMS({\n      \"body\":\"address=tel%3A%2B1xxxxxxxxxx&amp;priority=High&amp;subject=Test%20MMS\",\n      \"contentType\" : \"application/x-www-form-urlencoded\",\n      \"accept\" : \"application/json\",\n      \"attachments\" : [{'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/png\",'filePath' :\"Path of the file\"}, {'fileName' : \"Name of the file\",'fileType' : \"type of the file like : image/jpeg\",'filePath' :\"Path of the file\"}]\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><i>Note: xxxxxxxxxx represents an AT&amp;T wireless number.</i></p>\n</div></li></ul></div></div></div></div></div></div></div>","members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"ATT.MMS","tagname":"method","name":"getMMSDeliveryStatus","id":"method-getMMSDeliveryStatus"},{"meta":{},"owner":"ATT.MMS","tagname":"method","name":"sendMMS","id":"method-sendMMS"}],"event":[],"css_mixin":[]},"inheritable":null,"parentMixins":[],"singleton":false,"override":null,"private":null,"name":"ATT.MMS","mixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"linenr":196,"id":"class-ATT.MMS","alternateClassNames":[],"aliases":{},"html_meta":{}});