function formBuilder(formId, formMethod, formAction){
    var fields = {};
    var addField = function(id, name, type, value){
        fields[id] = {
            id: id,
            name: name,
            type: type,
            value: value
        };
    };
    var removeField = function(id){
        delete fields[id];
    };
    var createForm = function(){
        var form = document.createElement("form");
        form.setAttribute("id", formId);
        form.setAttribute('method', formMethod);
        form.setAttribute('action', formAction);
        return form;
    };
    var createFields = function(obj){
        var field = document.createElement("input");
        field.setAttribute('type', obj.type);
        field.setAttribute('name', obj.name);
        field.setAttribute('id', obj.id);
        field.setAttribute('value', obj.value);
        return field;
    };
    var generateForm = function(appendTo){
        var form = createForm();
        for(var i in fields){
            var field = createFields(fields[i]);
            form.appendChild(field);
        }
        document.getElementById(appendTo).innerHTML = '';
        document.getElementById(appendTo).appendChild(form);
    };
    var submitForm = function(){
        document.getElementById(formId).submit();
    };
    return {
        add: addField,
        remove: removeField,
        generate: generateForm,
        submit: submitForm
    };
}
