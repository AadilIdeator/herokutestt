export class regx {
    static username(control){
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {username:true}
    }
    static email(control){
        let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        let valid = regx.test(control.value);
        return valid ? null : {email:true}
    }
    static contactNo(control){
        let regx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        let valid = regx.test(control.value);
        return valid ? null : {contactNo:true}
    }
    static password(control){
        let regx =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        return valid ? null : {password:true}
    }
}