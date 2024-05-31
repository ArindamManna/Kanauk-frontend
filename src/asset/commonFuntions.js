function update({ e, position, value, form }) {
    // let { name, value } = e.target;
    let { name, index } = position;
    if (position?.sub == undefined) {
        form[name] = value;
    } else {
        if (index !== undefined) {
            let result = update({ position: position.sub, value, form: form[name][index] })
            form[name][index] = result;
        } else {

            let result = update({ position: position.sub, value, form: form[name] })
            form[name] = result;
        }
    }
    return form;
}
function add_remove_elem_fromdata_recursion({ e, position, form, doAdd, indexToremove, inhitialFormdata }) {
    // let { name, value } = e.target;
    // debugger
    let { name, index } = position;
    if (position?.sub == undefined) {
        if (Array.isArray(form[name])) {
            if (doAdd) {

                form[name] = [...form[name], inhitialFormdata[name][0]]
            } else {
                console.log(indexToremove);
                console.log(form[name]?.filter((item, i) => i != indexToremove), "manna");
                form[name] = form[name]?.filter((item, i) => i != indexToremove)
            }
        }
        // form[name] = value;
    } else {
        if (index !== undefined) {
            let sendinhitialFormdata = inhitialFormdata[name][index];
            if (sendinhitialFormdata == undefined) {
                sendinhitialFormdata = inhitialFormdata[name][0]
            }
            let result = add_remove_elem_fromdata_recursion({ position: position.sub, form: form[name][index], inhitialFormdata: sendinhitialFormdata, doAdd, indexToremove })
            form[name][index] = result;
        } else {

            let result = add_remove_elem_fromdata_recursion({ position: position.sub, form: form[name], inhitialFormdata: inhitialFormdata[name], doAdd, indexToremove })
            form[name] = result;
        }
    }
    return form;
}


function getObjFromList({ list, matchdata: { name, value } }) {
    let arr = list.filter((item) => {
        return item[name] == value;
    });

    return arr[0];
}
export { update, add_remove_elem_fromdata_recursion, getObjFromList }