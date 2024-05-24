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
    let { name, index } = position;
    if (position?.sub == undefined) {
        if (Array.isArray(form[name])) {
            if (doAdd) {

                form[name] = [...form[name], inhitialFormdata[name][0]]
            } else {
                form[name] = form[name]?.filter((item, i) => i != indexToremove)
            }
        }
        // form[name] = value;
    } else {
        if (index !== undefined) {
            let result = update({ position: position.sub, form: form[name][index], inhitialFormdata: inhitialFormdata[name][index] })
            form[name][index] = result;
        } else {

            let result = update({ position: position.sub, form: form[name], inhitialFormdata: inhitialFormdata[name] })
            form[name] = result;
        }
    }
    return form;
}

export { update, add_remove_elem_fromdata_recursion }