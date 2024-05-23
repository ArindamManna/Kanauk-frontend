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


export { update }