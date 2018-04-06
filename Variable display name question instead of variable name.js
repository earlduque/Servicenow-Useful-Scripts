/*Pulled from SN Devs Slack, example. getting "Tell us your name" instead of "u_name"
 * 
 * nate.anderson [1 hour ago]
 *Yea, i've used variable pool question set in the past. If you look at the OOB "Catalog Approval Request" notification (and it's template) you can see what they're doing in there to list all the quesiton labels... but i don't think it'll let you use it in a scoped app. 
 *Seems to be another item SN missed to add into Scoped Applications.. (Happens, they can't think of everything!)
 *    Here is truncated version of Jace's code that should get you just Q and DisplayValues... i haven't tested it...but should be 98 % correct.
 */

var v = new GlideRecord('sc_item_option_mtom');
v.addQuery('request_item', current.sys_id);
v.addQuery('sc_item_option.question.question_text', '!=', ''); //don't get empty questions (such as containers)
v.orderBy('sc_item_option.order');
v.query();

var finalText = '';
while (v.next()) {

    var questionText = v.sc_item_option.question.question_text.getDisplayValue();
    var varName = v.sc_item_option.question.name.toString(); //store var name so we can pass into variables and getDisplayValue();
    var questionValue = current.variables[varName].getDisplayValue();

    var questionWithValue = questionText + ': ' + questionValue;

    finalText += questionWithValue + '<br/>';
}

//remove our trailing <br/>
finalText = finalText.replace(/<br\/>$/, '');
template.print(finalText);